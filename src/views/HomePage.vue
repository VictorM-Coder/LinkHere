<script setup lang="ts">
import Image from 'primevue/image'
import SecondaryButton from '@/components/form/SecondaryButton.vue'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
</script>

<template>
  <section class="flex h-screen flex-wrap px-8 py-6 lg:px-32 lg:py-20">
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
    <article class="self-auto lg:w-2/3">
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
        <primary-button class="me-10"> Get Started </primary-button>
        <secondary-button> Sign in </secondary-button>
      </nav>
    </article>
  </section>
</template>

<style scoped></style>
