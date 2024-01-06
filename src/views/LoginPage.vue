<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Image from 'primevue/image'
</script>

<template>
  <main
    class="flex h-screen flex-wrap items-center justify-center bg-slate-900"
  >
    <section>
      <header class="mb-10 flex w-full flex-wrap justify-center">
        <Image
          class="top-0"
          src="/src/assets/logo.svg"
          alt="Image"
          width="60"
        ></Image>
        <h1 class="font-title mt-3 w-full text-center text-4xl">
          Sign in to LinkHere
        </h1>
      </header>

      <form class="h-fit max-w-80 rounded-xl bg-slate-800 p-8">
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
        <Button
          class="mb-4 box-border flex w-full justify-center border-2 border-pink-600 bg-pink-600 px-6 py-2.5 font-medium text-pink-100 hover:bg-pink-700 hover:text-pink-200 focus:ring-2 focus:ring-pink-300"
          >Login
        </Button>
        <Button
          class="font-text box-border flex w-full justify-center border-2 border-pink-100 px-6 py-2.5 font-medium text-pink-100 hover:border-pink-400 hover:text-pink-400 focus:ring-2 focus:ring-pink-400"
          >Create Account
        </Button>
      </form>
    </section>
  </main>
</template>
