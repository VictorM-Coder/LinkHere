<script setup lang="ts">
import Button from 'primevue/button'
import CopyContent from '@/components/icons/CopyContent.vue'
</script>

<template>
  <a
    class="w-full rounded-2xl hover:ring-2 hover:ring-pink-600"
    href="#"
  >
    <div
      class="flex items-center justify-between w-full rounded-2xl bg-slate-800 px-6 py-3"
    >
      <p>AAAAAAAAAAAAAAAAAAAAAAAAAA</p>
      <Button
        class="p-2 hover:bg-slate-700 focus:border-none focus:bg-slate-600 focus:outline-none"
        label="Primary"
        rounded
      >
        <copy-content />
      </Button>
    </div>
  </a>
</template>
