<script setup lang="ts">
import FileUpload from 'primevue/fileupload'
import Image from 'primevue/image'
import Textarea from 'primevue/textarea'
import InputText from 'primevue/inputtext'
import PrimaryButton from '@/components/form/PrimaryButton.vue'
import ProfileForm from "@/components/form/ProfileForm.vue"
</script>

<template>
  <div class="grid grid-cols-1 gap-10 p-16 lg:grid-cols-2">
    <profile-form />
    <div>02</div>
  </div>
</template>
