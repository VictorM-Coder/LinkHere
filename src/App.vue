<script setup lang="ts">
import DarkBackground from '@/components/DarkBackground.vue'
import Toast from 'primevue/toast'
import ProfileService from '@/services/ProfileService'
import AuthService from '@/services/AuthService'
import { onBeforeMount } from "vue"
import { useUserStore } from '@/stores/UserStore'

//TODO preparar fluxo para caso o usuário não esteja logado
onBeforeMount(() => {
  const user = AuthService.getUserAuthenticated()
  if (user) {
    useUserStore().user = user
  }
})
</script>

<template>
  <dark-background>
    <Toast />
    <router-view />
  </dark-background>
</template>
