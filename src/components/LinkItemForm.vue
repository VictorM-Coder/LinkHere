<script setup lang="ts">
import type LinkItemType from '@/types/LinkItemType'
import DragIcon from '@/components/icons/DragIcon.vue'
import IconButton from '@/components/form/IconButton.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import CopyContent from '@/components/icons/CopyContent.vue'
import EditInputText from '@/components/form/EditInputText.vue'
import ClipboardUtil from '@/utils/ClipboardUtil'
import { useToast } from 'primevue/usetoast'
import { onMounted, ref } from 'vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'

const editTitle = ref<Boolean>(false)
const editLink = ref<Boolean>(false)

const schema = yup.object({
  link: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter a correct url!',
    )
    .required('Please enter a link')
    .label('link'),
  title: yup.string().required().label('title'),
})

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
})

const [title] = defineField('title')
const [link] = defineField('link')

const toast = useToast()
const props = defineProps({
  linkItem: {
    type: Object as () => LinkItemType,
    required: true,
  },
})

onMounted(() => {
  title.value = props.linkItem?.title
  link.value = props.linkItem?.link
})

const emit = defineEmits(['onUpdate'])

function updateTitle(title: string) {
  emit('onUpdate', {
    title: title,
    link: props.linkItem.link,
  })
  editTitle.value = false
}

function updateLink(link: string) {
  emit('onUpdate', {
    title: props.linkItem.title,
    link: link,
  })
  editLink.value = false
}

function copyLink() {
  ClipboardUtil.copyText(props.linkItem.link)
}

function showSuccess() {
  toast.add({
    severity: 'success',
    summary: 'Link copied',
    detail: `${props.linkItem.title} link copied to your clipboard`,
    life: 3000,
  })
}

function onEditTitle() {
  editTitle.value = true
}

function onEditLink() {
  editLink.value = true
}
</script>

<template>
  <li class="flex w-full items-center rounded-2xl bg-slate-800 p-6">
    <div class="me-6 flex">
      <drag-icon class="handle text-pink-200 opacity-80 hover:cursor-grab" />
    </div>
    <form class="w-full">
      <edit-input-text
        name="title"
        :value="title"
        type="title"
        :editable="editTitle"
        @on-update="updateTitle"
        @on-edit="onEditTitle"
      />
      <edit-input-text
        name="link"
        :value="link"
        :editable="editLink"
        type="link"
        @on-update="updateLink"
        @on-edit="onEditLink"
      />
      <div class="flex items-center justify-end">
        <icon-button
          class="me-2"
          title="Copy link"
          @click="copyLink(), showSuccess()"
        >
          <copy-content />
        </icon-button>
        <icon-button>
          <delete-icon />
        </icon-button>
      </div>
    </form>
  </li>
</template>
