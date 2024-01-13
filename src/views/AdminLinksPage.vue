<script setup lang="ts">
import ProfileForm from '@/components/form/ProfileForm.vue'
import LinkItemForm from "@/components/LinkItemForm.vue"
</script>

<template>
  <div class="grid grid-cols-1 gap-10 p-16 lg:grid-cols-2">
    <profile-form />
    <section>
      <h1 class="font-title mb-8 w-full text-4xl">Your links</h1>
      <ul>
        <link-item-form :link-item="{ title: 'Github', link: '#' }" />
      </ul>
    </section>
  </div>
</template>
