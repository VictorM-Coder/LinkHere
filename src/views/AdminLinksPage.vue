<script setup lang="ts">
import ProfileForm from '@/components/form/ProfileForm.vue'
import LinkItemForm from '@/components/LinkItemForm.vue'
import draggable from 'vuedraggable'
import { onMounted, ref } from 'vue'
import type LinkItemType from '@/types/LinkItemType'
import ScrollPanel from 'primevue/scrollpanel'
import Dialog from 'primevue/dialog'
import LinkFormDialog from '@/components/form/LinkFormDialog.vue'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import LinkService from '@/services/LinkService'
import { useUserStore } from '@/stores/UserStore'

interface Moved {
  newIndex: number
  oldIndex: number
}

const visible = ref(false)
const linkItems = ref<LinkItemType[]>([])

onMounted(async () => {
  linkItems.value = await LinkService.findLinkByOwner(useUserStore().getId)
})

async function createLink(link: LinkItemType) {
  link.order = linkItems.value.length
  link.owner = useUserStore().getId
  await LinkService.createLink(link)
}

async function updateLink(newLink: LinkItemType, linkOrder: number) {
  const linkToBeUpdated = linkItems.value[linkOrder - 1]

  linkToBeUpdated.title = newLink.title
  linkToBeUpdated.link = newLink.link
  await LinkService.update(linkToBeUpdated)
}

async function changeOrder(moved: Moved) {
  linkItems.value[moved.newIndex].order = moved.newIndex
  linkItems.value[moved.oldIndex].order = moved.oldIndex

  await LinkService.updateOrder(
    linkItems.value[moved.newIndex],
    linkItems.value[moved.oldIndex],
  )
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
      <link-form-dialog
        @close-modal="closeCallback"
        @create-link="createLink"
      />
    </template>
  </Dialog>
</template>
