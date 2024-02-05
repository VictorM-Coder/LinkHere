<script setup lang="ts">
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import InputGroup from 'primevue/inputgroup'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import PasteIcon from '@/components/icons/PasteIcon.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconButton from '@/components/form/IconButton.vue'
import ClipboardUtil from '@/utils/ClipboardUtil'
import * as yup from 'yup'
import { useForm } from 'vee-validate'

const schema = yup.object({
  title: yup.string().required().label('Link title'),
  link: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter a correct url!',
    )
    .required('Please enter a link'),
})

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const [title] = defineField('title')
const [link] = defineField('link')

const emit = defineEmits(['closeModal', 'createLink'])

const onSubmit = handleSubmit(() => {
  createLink()
})

async function pasteText() {
  link.value = await ClipboardUtil.pasteText()
}

function createLink() {
  emit('createLink', {
    title: title.value,
    link: link.value,
  })
}
</script>

<template>
  <div class="rounded-2xl bg-slate-800 p-6">
    <header class="flex items-center justify-between">
      <h1 class="font-title text-3xl">Add a new link</h1>
      <icon-button @click="emit('closeModal')">
        <close-icon />
      </icon-button>
    </header>
    <form
      class="mt-8"
      @submit.prevent="onSubmit"
    >
      <div class="field mb-6">
        <label for="input-name">Link name</label>
        <InputText
          id="input-name"
          v-model="title"
          class="mt-2 w-full p-2.5"
          type="text"
          aria-describedby="title-help"
          :class="{ 'p-invalid': errors.title }"
        />
        <small
          id="title-help"
          class="p-error"
          >{{ errors.title }}</small
        >
      </div>

      <div class="field mb-6">
        <label for="input-link">Link</label>
        <InputGroup class="mt-2">
          <InputText
            id="input-link"
            v-model="link"
            class="w-full p-2.5"
            type="text"
            aria-describedby="link-help"
            :class="{ 'p-invalid': errors.link }"
          />
          <Button
            class="bg-slate-900 px-4"
            @click="pasteText"
          >
            <paste-icon />
          </Button>
        </InputGroup>
        <small
          id="link-help"
          class="p-error"
          >{{ errors.link }}</small
        >
      </div>

      <div class="mt-8 flex justify-end">
        <secondary-button
          class="me-10"
          @click="emit('closeModal')"
        >
          Cancel
        </secondary-button>
        <primary-button @click="createLink"> Add </primary-button>
      </div>
    </form>
  </div>
</template>
