<script setup lang="ts">
import Button from 'primevue/button'
import Image from 'primevue/image'
</script>

<template>
  <main
    class="flex h-screen flex-wrap bg-slate-900 px-8 py-6 lg:px-32 lg:py-20"
  >
    <div
      class="fixed -right-56 -top-56 h-64 w-64 rounded-full bg-pink-500 shadow-[0_0px_800px_120px_rgba(236,72,153,1)] brightness-200"
    />
    <header class="h-fit w-full">
      <Image
        class="top-0"
        src="/src/assets/logo-complete.svg"
        alt="Image"
        width="120"
      ></Image>
    </header>
    <section class="self-auto lg:w-2/3">
      <h1 class="font-title text-4xl text-white">
        Unlock Link Power with Our Service!
      </h1>
      <p class="font-text mt-5 text-lg text-white">
        Welcome to a streamlined solution for enhancing your online links! If
        you're tired of juggling multiple links and want to provide a smoother
        experience for your followers, our link aggregation service is here to
        help
      </p>
      <nav class="mt-4 flex items-center">
        <Button
          class="font-text me-10 box-border border-2 border-pink-600 bg-pink-600 px-6 py-2.5 font-medium text-pink-100 hover:bg-pink-700 hover:text-pink-200 focus:ring-2 focus:ring-pink-300"
          >Create Account
        </Button>
        <Button
          class="font-text box-border border-2 border-pink-100 px-6 py-2.5 font-medium text-pink-100 hover:border-pink-400 hover:text-pink-400 focus:ring-2 focus:ring-pink-400"
        >
          Enter Account
        </Button>
      </nav>
    </section>
  </main>
</template>

<style scoped></style>
