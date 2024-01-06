<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <Button
    class="box-border flex justify-center border-2 border-pink-600 bg-pink-600 px-6 py-2.5 font-medium text-pink-100 hover:bg-pink-700 hover:text-pink-200 focus:ring-2 focus:ring-pink-300"
  >
    <slot />
  </Button>
</template>
