<script setup lang="ts">
import CopyContent from '@/components/icons/CopyContent.vue'
import IconButton from '@/components/form/IconButton.vue'
</script>

<template>
  <li
    class="w-full rounded-2xl hover:text-pink-400 hover:ring-2 hover:ring-pink-600"
  >
    <a
      class="flex w-full items-center justify-between rounded-2xl bg-slate-800 px-6 py-3"
      href="#"
    >
      <p class="font-text me-4 hyphens-auto break-all text-xl">Github</p>
      <icon-button>
        <copy-content />
      </icon-button>
    </a>
  </li>
</template>
