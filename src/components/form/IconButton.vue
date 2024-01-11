<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <Button
    class="min-w-fit p-2 hover:bg-slate-700 focus:border-none focus:bg-slate-600 focus:outline-none"
    label="Primary"
    rounded
  >
    <slot />
  </Button>
</template>
