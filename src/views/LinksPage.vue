<script setup lang="ts">
import Avatar from 'primevue/avatar'
import LinkItem from '@/components/LinkItem.vue'
import { ref } from 'vue'
import type LinkItemType from '@/types/LinkItemType'

const linkItems = ref<LinkItemType[]>([])
</script>

<template>
  <div class="mx-auto h-full px-4 pt-16 align-top md:w-96 md:px-0">
    <header class="flex h-fit w-full flex-wrap justify-center">
      <Avatar
        image="/src/assets/logo.svg"
        size="xlarge"
        shape="circle"
      />
      <h1 class="font-title mt-4 w-full text-center text-4xl">@Cabaipsum</h1>
      <p class="font-text mt-3 text-center">
        bio descriçao do caba ipsum lorem dolor
      </p>
    </header>
    <main class="mt-12">
      <link-item
        v-for="(linkItem, index) in linkItems"
        :key="index"
        class="mb-4"
        :link-item="linkItem"
      />
    </main>
  </div>
</template>
