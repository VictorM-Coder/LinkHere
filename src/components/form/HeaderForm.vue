<script setup lang="ts">
import Image from 'primevue/image'
</script>

<template>
  <header class="flex w-full flex-wrap justify-center">
    <Image
      src="/src/assets/logo.svg"
      alt="Image"
      width="60"
    ></Image>
    <h1 class="font-title mt-3 w-full text-center text-4xl">
      <slot />
    </h1>
  </header>
</template>
