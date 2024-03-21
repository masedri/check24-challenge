<template>
  <select class="select" :name="type" v-model="value" multiple>
    <option class="option" v-for="option in options" :key="option.id" :value="option.id">{{ option.value }}</option>
  </select>
</template>

<script setup lang="ts">
import type { Select } from '@/core/types'
import { defineProps, watch } from 'vue'

const props = defineProps<Select>()
const emit = defineEmits(['change'])

const value = defineModel()

watch(value, () => emit('change', { id: props.id, value: value.value }))
</script>

<style scoped>
.select {
  font-size: 16px;
  background-color: transparent;
  border: 0px solid transparent;
  overflow: hidden;
  width: 200px;
  height: 130px;
}
.option {
  cursor: pointer;
  padding: 10px;
  margin-bottom: 3px;
  border: 1px solid transparent;
}
.option:hover {
  cursor: pointer;
  border: 1px solid var(--color-secondary);
  border-radius: 10px;
}
.option:checked {
  color: white;
  border-radius: 10px;
  background-color: var(--color-secondary);
  transition: all 0.3s ease;
}

.select:focus {
  outline: none;
}
</style>
