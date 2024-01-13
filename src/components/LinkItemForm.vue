<script setup lang="ts">
import type LinkItemType from '@/types/LinkItemType'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup'
import PasteIcon from '@/components/icons/PasteIcon.vue'
import Button from 'primevue/button'
import EditIcon from '@/components/icons/EditIcon.vue'
import DragIcon from '@/components/icons/DragIcon.vue'
import IconButton from "@/components/form/IconButton.vue"
import DeleteIcon from "@/components/icons/DeleteIcon.vue"
import CopyContent from "@/components/icons/CopyContent.vue"

const props = defineProps({
  linkItem: {
    type: Object as () => LinkItemType,
    required: true,
  },
})
</script>

<template>
  <li class="flex w-full items-center rounded-2xl bg-slate-800 px-6 py-8">
    <div class="me-6 flex">
      <drag-icon class="text-pink-200 opacity-80" />
    </div>
    <div class="w-full">
      <InputGroup class="mb-6">
        <InputText
          id="input-title"
          v-model="linkItem.title"
          class="w-full p-2.5"
          type="text"
          disabled
        />
        <Button
          class="bg-slate-900 px-4"
          @click="pasteText"
        >
          <edit-icon />
        </Button>
      </InputGroup>
      <InputGroup class="mb-6">
        <InputText
          id="input-link"
          v-model="linkItem.link"
          class="w-full p-2.5"
          type="text"
          disabled
        />
        <Button
          class="bg-slate-900 px-4"
          @click="pasteText"
        >
          <edit-icon />
        </Button>
      </InputGroup>
      <div class="flex justify-end items-center">
        <icon-button class="me-2" title="Copy link">
          <copy-content />
        </icon-button>
        <icon-button>
          <delete-icon />
        </icon-button>
      </div>
    </div>
  </li>
</template>
