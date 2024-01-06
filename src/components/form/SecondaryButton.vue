<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <Button
    class="font-text box-border flex justify-center border-2 border-pink-100 px-6 py-2.5 font-medium text-pink-100 hover:border-pink-400 hover:text-pink-400 focus:ring-2 focus:ring-pink-400"
  >
    <slot />
  </Button>
</template>
