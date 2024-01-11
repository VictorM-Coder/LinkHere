<script setup lang="ts">
import Avatar from 'primevue/avatar'
import LinkItem from '@/components/LinkItem.vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import IconButton from '@/components/form/IconButton.vue'
import InputText from 'primevue/inputtext'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import PasteIcon from '@/components/icons/PasteIcon.vue'

const visible = ref(false)

function showText() {
  navigator.clipboard.readText().then((cliptext) => console.log(cliptext))
}
</script>

<template>
  <div class="mx-auto h-full px-4 pt-16 align-top md:w-96 md:px-0">
    <header class="flex h-fit w-full flex-wrap justify-center">
      <Avatar
        image="/src/assets/logo.svg"
        size="xlarge"
        shape="circle"
      />
      <h1 class="font-title mt-4 w-full text-center text-4xl">@Cabaipsum</h1>
      <p class="font-text mt-3 text-center">
        bio descriçao do caba ipsum lorem dolor
      </p>
    </header>
    <main class="mt-12">
      <ul class="flex flex-wrap">
        <link-item />
      </ul>
      <Button
        class="font-text mt-8 flex w-full items-center justify-center rounded-2xl border-2 border-pink-600 bg-pink-600 px-6 py-3 text-xl font-medium text-pink-100 hover:bg-pink-700 hover:text-pink-200 focus:ring-2 focus:ring-pink-300"
        @click="visible = true"
      >
        Add Link
      </Button>
    </main>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Header"
    :style="{ width: '32rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <template #container="{ closeCallback }">
      <div class="rounded-2xl bg-slate-800 p-6">
        <header class="flex items-center justify-between">
          <h1 class="font-title text-3xl">Add a new link</h1>
          <icon-button @click="closeCallback">
            <close-icon />
          </icon-button>
        </header>
        <form class="mt-8">
          <label for="input-name">Link name</label>
          <InputText
            id="input-name"
            class="mb-6 mt-2 w-full p-2.5"
            type="text"
          />

          <label for="input-link">Link</label>
          <InputGroup class="mb-6 mt-2">
            <InputText
              id="input-link"
              class="w-full p-2.5"
              type="text"
            />
            <Button class="bg-slate-900 px-4">
              <paste-icon />
            </Button>
          </InputGroup>

          <div class="mt-8 flex justify-end">
            <secondary-button
              class="me-10"
              @click="visible = false"
            >
              Cancel
            </secondary-button>
            <primary-button @click="showText"> Add </primary-button>
          </div>
        </form>
      </div>
    </template>
  </Dialog>
</template>
