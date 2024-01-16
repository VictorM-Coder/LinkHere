<script setup lang="ts">
import CopyContent from '@/components/icons/CopyContent.vue'
import IconButton from '@/components/form/IconButton.vue'
import type LinkItemType from '@/types/LinkItemType'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const props = defineProps({
  linkItem: {
    type: Object as () => LinkItemType,
    required: true,
  },
})

function copyLink() {
  navigator.clipboard.writeText(props.linkItem.link)
}

const showSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Link copied',
    detail: `${props.linkItem?.title} link copied to your clipboard`,
    life: 3000,
  })
}
</script>

<template>
  <li
    class="w-full list-none rounded-2xl hover:text-pink-400 hover:ring-2 hover:ring-pink-600"
  >
    <a
      class="flex w-full items-center justify-between rounded-2xl bg-slate-800 px-6 py-3"
      :href="linkItem.link.toString()"
    >
      <p class="font-text me-4 hyphens-auto break-all text-xl">
        {{ linkItem.title }}
      </p>
      <icon-button @click.prevent="copyLink(), showSuccess()">
        <copy-content />
      </icon-button>
    </a>
  </li>
</template>
