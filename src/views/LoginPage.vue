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
import HeaderForm from '@/components/form/HeaderForm.vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'

const schema = yup.object({
  email: yup.string().required().email().label('Email address'),
  password: yup.string().required().min(6).label('Password'),
})

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const [email] = defineField('email')
const [password] = defineField('password')

const toast = useToast()

const onsubmit = handleSubmit(() => {
  login()
})

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

      <form
        class="max-w-80 rounded-xl bg-slate-800 p-8"
        @submit.prevent="onsubmit"
      >
        <div class="field mt-6">
          <label for="input-email">Email </label>
          <InputText
            id="input-email"
            v-model="email"
            aria-describedby="email-help"
            type="email"
            :class="{ 'p-invalid': errors.email }"
            class="mt-2 w-full p-2.5"
          />
          <small
            id="email-help"
            class="p-error"
            >{{ errors.email }}</small
          >
        </div>

        <div class="field my-6">
          <label for="input-password">Password</label>
          <Password
            v-model="password"
            input-id="input-password"
            class="mt-2 w-full"
            toggle-mask
            :feedback="false"
            aria-describedby="password-help"
            :class="{ 'p-invalid': errors.password }"
          />
          <small
            id="password-help"
            class="p-error"
          >
            {{ errors.password }}
          </small>
        </div>

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
