<script setup lang="ts">
import DarkBackground from '@/components/DarkBackground.vue'
import Toast from 'primevue/toast'
import { firestore } from '@/firebase'
console.log(firestore)
</script>

<template>
  <dark-background>
    <Toast />
    <router-view />
  </dark-background>
</template>
