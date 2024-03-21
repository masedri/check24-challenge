<template>
  <div class="range">
    <p>
      {{ text }}
    </p>
    <input v-bind="props" v-model.number="value" />
    <span>
      {{ euro.format(value as number) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Range } from '@/core/types'
import { defineProps, watch } from 'vue'
import { euro } from '@/core/utils/index'

const props = defineProps<Range>()
const emit = defineEmits(['change'])

const value = defineModel()

watch(value, () => emit('change', { id: props.id, value: value.value }))
</script>

<style scoped>
.range {
  display: flex;
  gap: 10px;
  width: 250px;
  padding: 8px;
}
</style>
