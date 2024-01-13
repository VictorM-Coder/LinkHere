<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import Image from 'primevue/image'
import FileUpload from 'primevue/fileupload'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
</script>

<template>
  <form class="rounded-2xl bg-slate-800 p-8">
    <h1 class="font-title mb-8 w-full text-4xl">Your profile</h1>

    <div class="mb-6 flex">
      <Image
        src="https://i.pinimg.com/564x/f4/95/a6/f495a67a4a004a791c61cd3570cbccdd.jpg"
        alt="Image Profile"
        image-class="rounded-full border-fit h-32 w-32 me-6"
        class="min-w-fit"
      />
      <div class="ms-6 w-full">
        <FileUpload
          mode="basic"
          class="w-full"
          name="demo[]"
          url="/api/upload"
          accept="image/*"
          :max-file-size="1000000"
        />
        <secondary-button class="mt-6 w-full"> Remove </secondary-button>
      </div>
    </div>

    <label for="input-name">Name</label>
    <InputText
      id="input-name"
      disabled
      class="mb-6 mt-2 w-full p-2.5"
    />

    <label for="bio-input">Bio</label>
    <Textarea
      id="bio-input"
      class="mt-2 w-full p-2.5"
      rows="5"
      cols="30"
      disabled
    />

    <primary-button class="ms-auto mt-4"> Edit profile </primary-button>
  </form>
</template>
