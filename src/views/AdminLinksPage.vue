<script setup lang="ts">
import ProfileForm from '@/components/form/ProfileForm.vue'
import LinkItemForm from '@/components/LinkItemForm.vue'
import draggable from 'vuedraggable'
import { ref } from 'vue'
import type LinkItemType from '@/types/LinkItemType'
import ScrollPanel from 'primevue/scrollpanel'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import LinkFormDialog from '@/components/form/LinkFormDialog.vue'
import PrimaryButton from "@/components/form/PrimaryButton.vue"

const visible = ref(false)
const linkItems = ref<LinkItemType[]>([
  { title: 'github', link: 'url' },
  { title: 'facebook', link: 'url' },
  { title: 'whatsapp', link: 'url' },
  { title: 'youtube', link: 'url' },
])
</script>

<template>
  <div class="grid grid-cols-1 gap-10 p-16 lg:grid-cols-2">
    <profile-form />
    <section>
      <header class="mb-8 flex justify-between align-middle">
        <h1 class="font-title w-fit text-4xl">Your links</h1>
        <primary-button
          class="h-fit w-fit"
          @click="visible = true"
        >
          Add Link
        </primary-button>
      </header>

      <ScrollPanel style="width: 100%; height: 480px">
        <draggable
          v-model="linkItems"
          item-key=""
          handle=".handle"
          tag="ul"
        >
          <template #item="{ element: linkItem }">
            <link-item-form
              class="mb-6"
              :link-item="linkItem"
            />
          </template>
        </draggable>
      </ScrollPanel>
    </section>
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
