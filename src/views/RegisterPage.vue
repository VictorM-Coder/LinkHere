<script setup lang="ts">
import AuthForm from '@/components/form/AuthForm.vue'
import DarkMain from '@/components/DarkMain.vue'
</script>

<template>
  <dark-main>
    <auth-form :is-login="false" />
  </dark-main>
</template>
