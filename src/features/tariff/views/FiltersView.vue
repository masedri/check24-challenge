<template>
  <div class="container">
    <component :is="components[filter.type]" v-bind="filter" v-model="filter.value" v-for="filter in filters" :key="filter.type" @change="applyFilter"></component>
  </div>
</template>

<script setup lang="ts">
import type { Filters, Components } from '@/core/types'
import { FiltersEnum } from '@/core/types'
import { Check24, Select24, Radio24, Range24 } from '@/core/components/24UI/index'
import { reactive } from 'vue'

import { useFilters } from '@/features/tariff/composables/index'

const components: Components<FiltersEnum> = {
  select: Select24,
  checkbox: Check24,
  range: Range24,
  radio: Radio24
}

const filters: Filters[] = reactive([
  {
    id: 'modality',
    type: FiltersEnum.Select,
    value: [],
    options: [
      { id: 4, value: 'terceros con franquicia' },
      { id: 3, value: 'terceros ampliado' }
    ],
    text: 'Tipo de seguro'
  },
  { id: 'final_price', type: FiltersEnum.Checkbox, value: false, text: 'Tiene precio final' },
  { id: 'price', type: FiltersEnum.Range, value: 0, text: 'Precio', min: '0', max: '150000', step: '5000' }
  // { id: 'order', type: FiltersEnum.Radio, value: 0, text: 'Order' }
])

const { applyFilter } = useFilters()
</script>

<style scoped>
.container {
  grid-area: filters;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 10px;
  padding: 20px 20px 0px;
}
</style>
