<script setup lang="ts">
import Avatar from 'primevue/avatar'
import LinkItem from '@/components/LinkItem.vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'
import LinkFormDialog from '@/components/form/LinkFormDialog.vue'
import type LinkItemType from '@/types/LinkItemType'
import draggable from 'vuedraggable'
import Toast from 'primevue/toast'

const visible = ref(false)
const linkItems = ref<LinkItemType[]>([
  { title: 'github', link: 'url' },
  { title: 'facebook', link: 'url' },
])
</script>

<template>
  <Toast />
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
      <draggable
        v-model="linkItems"
        item-key=""
        tag="ul"
      >
        <template #item="{ element: linkItem }">
          <link-item
            :key="linkItem.link"
            class="mb-4"
            :link-item="linkItem"
          />
        </template>
      </draggable>
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
    :breakpoints="{ '1199px': '75vw', '575px': '75vw' }"
  >
    <template #container="{ closeCallback }">
      <link-form-dialog @close-modal="closeCallback" />
    </template>
  </Dialog>
</template>
