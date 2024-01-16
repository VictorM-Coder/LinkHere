<script setup lang="ts">
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import InputGroup from 'primevue/inputgroup'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import PasteIcon from '@/components/icons/PasteIcon.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconButton from '@/components/form/IconButton.vue'
import { ref } from 'vue'
import type LinkItemType from '@/types/LinkItemType'
import ClipboardUtil from '@/utils/ClipboardUtil'

const emit = defineEmits(['closeModal'])
const linkItem = ref<LinkItemType>({} as LinkItemType)

async function pasteText() {
  linkItem.value.link = await ClipboardUtil.pasteText()
}

function createLink() {
  window.alert(linkItem.value.title)
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
    <form class="mt-8">
      <label for="input-name">Link name</label>
      <InputText
        id="input-name"
        v-model="linkItem.title"
        class="mb-6 mt-2 w-full p-2.5"
        type="text"
      />

      <label for="input-link">Link</label>
      <InputGroup class="mb-6 mt-2">
        <InputText
          id="input-link"
          v-model="linkItem.link"
          class="w-full p-2.5"
          type="text"
        />
        <Button
          class="bg-slate-900 px-4"
          @click="pasteText"
        >
          <paste-icon />
        </Button>
      </InputGroup>

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
