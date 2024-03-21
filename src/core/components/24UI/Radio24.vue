<template>
  <div class="btn" @click="toggleOrder">Ordenar {{ orderDirection }}</div>
</template>

<script setup lang="ts">
import type { Radio } from '@/core/types'
import { computed, defineProps, defineEmits, watch } from 'vue'

const props = defineProps<Radio>()
const emit = defineEmits(['change'])

const value = defineModel()

const orderDirection = computed(() => (value ? 'ascendente' : 'descendente'))

const toggleOrder = () => (value.value = !value)

watch(value, () => emit('change', { id: props.id, value: value.value }))
</script>

<style scoped>
.btn {
  cursor: pointer;
  color: white;
  padding: 7px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: var(--color-secondary);
}
.btn:hover {
  cursor: pointer;
  border: 1px solid var(--color-secondary);
}
.has-select {
  cursor: pointer;
  background-color: var(--color-secondary);
  color: white;
  padding: 7px;
  border-radius: 10px;
  border: 1px solid transparent;
}
</style>
