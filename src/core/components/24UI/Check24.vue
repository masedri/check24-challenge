<template>
  <input class="hidden" v-bind="props" v-model="value" />
  <span class="btn" :class="{ 'has-select': value }" @click="value = !value">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import type { Checkbox } from '@/core/types'
import { defineProps, watch } from 'vue'

const props = defineProps<Checkbox>()
const emit = defineEmits(['change'])

const value = defineModel()

watch(value, () => emit('change', { id: props.id, value: value.value }))
</script>

<style scoped>
.btn {
  cursor: pointer;
  color: black;
  padding: 7px;
  border-radius: 10px;
  border: 1px solid transparent;
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
.hidden {
  display: none;
}
</style>
