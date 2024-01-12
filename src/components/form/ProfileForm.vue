<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
</script>

<template>
  <form class="rounded-2xl bg-slate-800 p-8">
    <h1 class="font-title mb-8 w-full text-4xl">Your profile</h1>

    <label for="input-name">Name</label>
    <InputText
      id="input-name"
      disabled
      class="mb-6 mt-2 w-full p-2.5"
    />

    <label for="bio-input">Bio</label>
    <Textarea
      id="bio-input"
      class="mt-2 w-full p-2.5"
      rows="5"
      cols="30"
      disabled
    />

    <primary-button class="ms-auto mt-4"> Edit profile </primary-button>
  </form>
</template>
