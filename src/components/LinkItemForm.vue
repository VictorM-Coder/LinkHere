<script setup lang="ts">
import type LinkItemType from '@/types/LinkItemType'
import DragIcon from '@/components/icons/DragIcon.vue'
import IconButton from '@/components/form/IconButton.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import CopyContent from '@/components/icons/CopyContent.vue'
import EditInputText from '@/components/form/EditInputText.vue'

const props = defineProps({
  linkItem: {
    type: Object as () => LinkItemType,
    required: true,
  },
})

const emit = defineEmits(['onUpdate'])

function updateTitle(title: string) {
  emit('onUpdate', {
    title: title,
    link: props.linkItem.link,
  })
}

function updateLink(link: string) {
  emit('onUpdate', {
    title: props.linkItem.title,
    link: link,
  })
}
</script>

<template>
  <li class="flex w-full items-center rounded-2xl bg-slate-800 px-6 py-8">
    <div class="me-6 flex">
      <drag-icon class="handle text-pink-200 opacity-80 hover:cursor-grab" />
    </div>
    <div class="w-full">
      <edit-input-text
        :value="linkItem.title"
        @on-update="updateTitle"
      />
      <edit-input-text
        :value="linkItem.link"
        @on-update="updateLink"
      />
      <div class="flex items-center justify-end">
        <icon-button
          class="me-2"
          title="Copy link"
        >
          <copy-content />
        </icon-button>
        <icon-button>
          <delete-icon />
        </icon-button>
      </div>
    </div>
  </li>
</template>
