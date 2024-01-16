<script setup lang="ts">
import InputGroup from 'primevue/inputgroup'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import EditIcon from '@/components/icons/EditIcon.vue'
import { ref } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['onUpdate'])
const edit = ref<Boolean>(false)
let valueInput: string

function changeFocus() {
  edit.value = false
  if (props.value != valueInput) {
    emit('onUpdate', valueInput)
  }
}
</script>

<template>
  <InputGroup class="mb-6">
    <InputText
      id="input-title"
      v-model="valueInput"
      :value="value"
      class="w-full p-2.5"
      type="text"
      :disabled="!edit"
      @focusout="changeFocus"
    />
    <Button
      class="bg-slate-900 px-4"
      @click="edit = true"
    >
      <edit-icon />
    </Button>
  </InputGroup>
</template>
