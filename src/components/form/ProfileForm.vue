<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import Image from 'primevue/image'
import FileUpload from 'primevue/fileupload'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import { computed, onMounted, ref } from 'vue'
import type ProfileType from '@/types/ProfileType'
import ProfileService from '@/services/ProfileService'
import { useUserStore } from '@/stores/UserStore'
import ImageService from '@/services/ImageService'

const isEditMode = ref<Boolean>(false)
const profile = ref<ProfileType>({} as ProfileType)
const imageFile = ref<File | null>()
let imageUploadUrl = ref<string>()
let deleteImage = false

onMounted(async () => {
  profile.value = await ProfileService.findProfileByOwner(useUserStore().getId)
})

const imageUrl = computed(() => {
  if (imageFile.value) {
    convertFileToUrl(imageFile.value)
    return imageUploadUrl.value
  }
  if (profile.value.imageUrl && profile.value.imageUrl.length > 0) {
    return profile.value.imageUrl
  }
  return 'src/assets/noprofile.jpg'
})

function onUpload(event: any) {
  imageFile.value = event.files[0]
}

function convertFileToUrl(file: File) {
  const reader = new FileReader()

  reader.onload = () => {
    if (typeof reader.result === 'string') {
      imageUploadUrl.value = reader.result
    }
  }

  reader.readAsDataURL(file)
}

async function updateProfile() {
  await ProfileService.updateDataProfile(profile.value)
  if (imageFile.value) {
    await ProfileService.updateImageProfile(
      profile.value.id as string,
      imageFile.value,
    )
  }
  if (deleteImage) {
    await ImageService.deleteImageProfile(profile.value.id as string)
    deleteImage = false
  }
}

function removeImage() {
  imageFile.value = null
  profile.value.imageUrl = ''
  deleteImage = true
}

function cancelEditMode() {
  isEditMode.value = false
  deleteImage = false
  imageFile.value = null
}
</script>

<template>
  <form class="rounded-2xl bg-slate-800 p-8">
    <h1 class="font-title mb-8 w-full text-4xl">Your profile</h1>

    <div class="mb-6 flex">
      <Image
        :src="imageUrl"
        alt="Image Profile"
        image-class="rounded-full border-fit h-32 w-32 me-6 object-cover"
        class="min-w-fit"
      />
      <div class="ms-6 w-full">
        <FileUpload
          mode="basic"
          auto
          custom-upload
          class="w-full"
          name="demo[]"
          accept="image/*"
          :max-file-size="1000000"
          :disabled="!isEditMode"
          @uploader="onUpload"
        />
        <secondary-button
          class="mt-6 w-full"
          :disabled="!isEditMode"
          @click="removeImage"
        >
          Remove
        </secondary-button>
      </div>
    </div>

    <label for="input-name">Name</label>
    <InputText
      id="input-name"
      v-model="profile.name"
      :disabled="!isEditMode"
      class="mb-6 mt-2 w-full p-2.5"
    />

    <label for="bio-input">Bio</label>
    <Textarea
      id="bio-input"
      v-model="profile.bio"
      class="mt-2 w-full p-2.5"
      rows="5"
      cols="30"
      :disabled="!isEditMode"
    />

    <primary-button
      v-if="!isEditMode"
      class="ms-auto mt-4"
      @click="isEditMode = true"
    >
      Edit profile
    </primary-button>

    <div
      v-if="isEditMode"
      class="ms-auto mt-4 flex justify-end"
    >
      <secondary-button @click="cancelEditMode"> Cancel </secondary-button>
      <primary-button
        type="submit"
        class="ms-6"
        @click.prevent="updateProfile"
      >
        Save
      </primary-button>
    </div>
  </form>
</template>
