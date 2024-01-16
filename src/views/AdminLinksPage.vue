<script setup lang="ts">
import ProfileForm from '@/components/form/ProfileForm.vue'
import LinkItemForm from '@/components/LinkItemForm.vue'
import draggable from 'vuedraggable'
import { ref } from 'vue'
import type LinkItemType from '@/types/LinkItemType'
import ScrollPanel from 'primevue/scrollpanel'
import Dialog from 'primevue/dialog'
import LinkFormDialog from '@/components/form/LinkFormDialog.vue'
import PrimaryButton from '@/components/form/PrimaryButton.vue'

interface Moved {
  newIndex: number
  oldIndex: number
}

const visible = ref(false)
const linkItems = ref<LinkItemType[]>([
  { id: '1', order: 0, title: 'github', link: 'url' },
  { id: '2', order: 1, title: 'facebook', link: 'url' },
  { id: '3', order: 2, title: 'whatsapp', link: 'url' },
  { id: '4', order: 3, title: 'youtube', link: 'url' },
])

function updateLink(newLink: LinkItemType, linkOrder: number) {
  linkItems.value[linkOrder].title = newLink.title
  linkItems.value[linkOrder].link = newLink.link
}

function changeOrder(moved: Moved) {
  linkItems.value[moved.newIndex].order = moved.newIndex
  linkItems.value[moved.oldIndex].order = moved.oldIndex
}
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
          item-key="id"
          handle=".handle"
          tag="ul"
          @change="(args: any) => changeOrder(args.moved)"
        >
          <template #item="{ element: linkItem }">
            <link-item-form
              :key="linkItem.id"
              class="mb-6"
              :link-item="linkItem"
              @on-update="(newLink) => updateLink(newLink, linkItem.order)"
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
