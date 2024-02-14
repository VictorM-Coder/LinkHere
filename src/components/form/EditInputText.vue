<script setup lang="ts">
import InputGroup from 'primevue/inputgroup'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import EditIcon from '@/components/icons/EditIcon.vue'
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  editable: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const name = toRef(props, 'name')

const { value: inputValue, errorMessage } = useField(name, undefined, {
  initialValue: props.value,
})

const emit = defineEmits(['onUpdate', 'failUpdate', 'onEdit'])

function handleUpdate() {
  if (!errorMessage.value) emit('onUpdate', inputValue.value)
}
</script>

<template>
  <div class="field my-6">
    <InputGroup>
      <InputText
        :id="name"
        v-model="inputValue"
        :name="name"
        :value="inputValue"
        class="w-full p-2.5"
        type="text"
        :disabled="!editable"
        aria-describedby="title-help"
        :class="{ 'p-invalid': errorMessage }"
        @focusout="handleUpdate"
      />
      <Button
        class="bg-slate-900 px-4"
        @click="emit('onEdit')"
      >
        <edit-icon />
      </Button>
    </InputGroup>
    <small
      id="title-help"
      class="p-error"
      >{{ errorMessage }}</small
    >
  </div>
</template>
