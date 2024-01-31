<script setup lang="ts">
import InputText from 'primevue/inputtext'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import Password from 'primevue/password'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import { useToast } from 'primevue/usetoast'
import { useUserStore } from '@/stores/UserStore'
import AuthService from '@/services/AuthService'
import router from '@/router'
import ProfileService from '@/services/ProfileService'
import HeaderForm from '@/components/form/HeaderForm.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email().label('Email address'),
  username: yup
    .string()
    .required()
    .test(
      'checkUsernameUnique',
      'This username is already in use',
      async (value) => !(await ProfileService.checkIfUsernameExists(value)),
    )
    .label('Username'),
  password: yup.string().required().min(6).label('Password'),
})

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const [username] = defineField('username')
const [email] = defineField('email')
const [password] = defineField('password')

const toast = useToast()

const onsubmit = handleSubmit(() => {
  register()
})

async function register() {
  try {
    useUserStore().user = await AuthService.registerUser(
      email.value,
      password.value,
    )
    createProfile()
    await router.push('/profile')
  } catch (error: any) {
    toast.add({
      severity: 'error',
      summary: 'Register Error',
      detail: error.message,
      life: 3000,
    })
  }
}

function createProfile() {
  const currentUser = useUserStore().user
  if (currentUser) {
    ProfileService.createProfile({
      name: currentUser.email,
      bio: '',
      imageUrl: '',
      owner: currentUser.id,
      username: username.value,
    })
  }
}
</script>

<template>
  <section class="flex h-fit flex-wrap justify-center">
    <header-form class="mb-10 mt-16">
      Create an Account in LinkHere
    </header-form>

    <form
      class="mb-16 max-w-80 rounded-xl bg-slate-800 p-8"
      @submit.prevent="onsubmit"
    >
      <div class="field">
        <label for="input-username">Username</label>
        <InputText
          id="input-username"
          v-model="username"
          class="mt-2 w-full p-2.5"
          aria-describedby="username-help"
          :class="{ 'p-invalid': errors.username }"
        />
        <small
          id="username-help"
          class="p-error"
        >
          {{ errors.username }}
        </small>
      </div>

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

      <div class="field mt-6">
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
        class="mb-4 mt-6 w-full"
        type="submit"
      >
        Create Account
      </primary-button>
      <router-link to="/login">
        <secondary-button class="w-full"> Sign in </secondary-button>
      </router-link>
    </form>
  </section>
</template>
