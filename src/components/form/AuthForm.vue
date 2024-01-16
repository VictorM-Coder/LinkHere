<script setup lang="ts">
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import Image from 'primevue/image'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import { ref } from 'vue'
import AuthService from '@/services/AuthService'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const props = defineProps({
  isLogin: {
    default: true,
    type: Boolean,
  },
})

const email = ref<string>('')
const password = ref<string>('')

function submitUser() {
  if (props.isLogin) {
    login()
  } else {
    register()
  }
}

async function login() {
  try {
    await AuthService.loginUser(email.value, password.value)
  } catch (error: any) {
    toast.add({
      severity: 'error',
      summary: 'Login Error',
      detail: error.message,
      life: 3000,
    })
  }
}

async function register() {
  try {
    await AuthService.registerUser(email.value, password.value)
  } catch (error: any) {
    toast.add({
      severity: 'error',
      summary: 'Register Error',
      detail: error.message,
      life: 3000,
    })
  }
}
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <section class="flex h-fit flex-wrap justify-center">
      <header class="mb-10 flex w-full flex-wrap justify-center">
        <Image
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
          @click.prevent="submitUser"
        >
          {{ isLogin ? 'Sign in' : 'Create Account' }}
        </primary-button>
        <router-link :to="isLogin ? '/register' : '/login'">
          <secondary-button class="w-full">
            {{ isLogin ? 'Create Account' : 'Sign in' }}
          </secondary-button>
        </router-link>
      </form>
    </section>
  </div>
</template>
