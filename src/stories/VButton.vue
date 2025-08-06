<template>
  <Button icon="pi pi-check" :severity="severity" :label="label" @click="onClick" />
</template>

<script lang="ts" setup>
import Button, { type ButtonProps } from 'primevue/button'
export type Severity = ButtonProps['severity']
interface Props {
  /** The text content shown inside the component (e.g., button or tag). */
  label: string
  /**
   * The severity level, which affects the visual style.
   * Possible values include 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast'.
   */
  severity?: Severity
}

withDefaults(defineProps<Props>(), {
  severity: 'success',
})

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const onClick = () => {
  emit('click', 1)
}
</script>
