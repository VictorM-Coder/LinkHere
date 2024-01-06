<script setup lang="ts">
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import Image from 'primevue/image'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import SecondaryButton from '@/components/form/SecondaryButton.vue'

defineProps({
  isLogin: {
    default: true,
    type: Boolean,
  },
})
</script>

<template>
  <section class="flex flex-wrap justify-center">
    <header class="mb-10 flex w-full flex-wrap justify-center">
      <Image
        class="top-0"
        src="/src/assets/logo.svg"
        alt="Image"
        width="60"
      ></Image>
      <h1 class="font-title mt-3 w-full text-center text-4xl">
        {{ isLogin ? 'Sign in to LinkHere' : 'Create account in LinkHere' }}
      </h1>
    </header>

    <form class="max-w-80 rounded-xl bg-slate-800 p-8">
      <label for="input-email">Email</label>
      <InputText
        id="input-email"
        class="mb-6 mt-2 w-full p-2.5"
      />

      <label for="input-password">Password</label>
      <Password
        input-id="input-password"
        class="mb-6 mt-2 w-full"
        toggle-mask
      />

      <primary-button class="mb-4 w-full">
        {{ isLogin ? 'Sign in' : 'Create Account' }}
      </primary-button>
      <secondary-button class="w-full">
        {{ isLogin ? 'Create Account' : 'Sign in' }}
      </secondary-button>
    </form>
  </section>
</template>
