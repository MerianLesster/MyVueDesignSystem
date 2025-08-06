<template>
  <div class="home">
    <h1>Welcome to Your MERIAN's Vue App</h1>
    <VButton label="HOMEVIEW" @click="increment"></VButton>
    <p>Counter: {{ count }}</p>

    <div class="flex flex-col gap-12">
      <div class="flex gap-6 flex-wrap">
        <div
          class="rounded-border p-4 border border-transparent flex items-center justify-center bg-primary hover:bg-primary-emphasis text-primary-contrast font-medium flex-auto transition-colors"
        >
          primary
        </div>
        <div
          class="rounded-border p-4 border border-transparent flex items-center justify-center bg-highlight hover:bg-highlight-emphasis font-medium flex-auto transition-colors"
        >
          highlight
        </div>
        <div
          class="rounded-border p-4 border border-surface flex items-center justify-center text-muted-color hover:text-color hover:bg-emphasis font-medium flex-auto transition-colors"
        >
          box
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VButton from '@/stories/VButton.vue'
import { useCounterStore } from '@/stores/CounterStore'
import { storeToRefs } from 'pinia'

const { increment } = useCounterStore()
const { count } = storeToRefs(useCounterStore())
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

p {
  color: var(--color-text);
  font-size: 1.1rem;
}
</style>
