<!--<script setup lang="ts">-->
<!--import CloseIcon from '@/components/icons/CloseIcon.vue'-->
<!--import Dialog from 'primevue/dialog'-->
<!--import IconButton from '@/components/form/IconButton.vue'-->
<!--import { watch } from 'vue'-->

<!--const props = defineProps({-->
<!--  visible: {-->
<!--    default: false,-->
<!--    type: Boolean,-->
<!--    required: true,-->
<!--  },-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <Dialog-->
<!--    v-model:visible="visible"-->
<!--    class="bg-slate-900"-->
<!--    modal-->
<!--    header="Header"-->
<!--    :style="{ width: '32rem' }"-->
<!--    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"-->
<!--  >-->
<!--    <template #container="{ closeCallback }">-->
<!--      <div class="rounded-2xl bg-slate-900 p-6">-->
<!--        <header class="flex items-center justify-between">-->
<!--          <h1 class="font-title text-2xl">Add a new link</h1>-->
<!--          <icon-button @click="closeCallback">-->
<!--            <close-icon />-->
<!--          </icon-button>-->
<!--        </header>-->
<!--      </div>-->
<!--    </template>-->
<!--  </Dialog>-->
<!--</template>-->
