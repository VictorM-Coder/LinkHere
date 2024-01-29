<script setup lang="ts">
import Image from 'primevue/image'
import InputText from 'primevue/inputtext'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import Password from 'primevue/password'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import AuthService from '@/services/AuthService'
import router from '@/router'
import HeaderForm from "@/components/form/HeaderForm.vue"

const toast = useToast()
const email = ref<string>('')
const password = ref<string>('')

async function login() {
  try {
    useUserStore().user = await AuthService.loginUser(
      email.value,
      password.value,
    )
    await router.push('/profile')
  } catch (error: any) {
    toast.add({
      severity: 'error',
      summary: 'Login Error',
      detail: error.message,
      life: 3000,
    })
  }
}
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <section class="flex h-fit flex-wrap justify-center">
      <header-form class="mb-10"> Sign in to LinkHere </header-form>

      <form class="max-w-80 rounded-xl bg-slate-800 p-8">
        <label for="input-email">Email</label>
        <InputText
          id="input-email"
          v-model="email"
          class="mb-6 mt-2 w-full p-2.5"
        />

        <label for="input-password">Password</label>
        <Password
          v-model="password"
          input-id="input-password"
          class="mb-6 mt-2 w-full"
          toggle-mask
        />

        <primary-button
          class="mb-4 w-full"
          type="submit"
          @click.prevent="login"
        >
          Sign in
        </primary-button>
        <router-link to="register">
          <secondary-button class="w-full"> Create Account </secondary-button>
        </router-link>
      </form>
    </section>
  </div>
</template>
