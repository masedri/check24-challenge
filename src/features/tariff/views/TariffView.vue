<template>
  <div class="container">
    <div v-for="tariff in tariffs" :key="tariff.id">
      <TariffCard v-bind="tariff" @action="add"></TariffCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import TariffCard from '@/features/tariff/components/TariffCard.vue'
import type { Insure } from '@/features/tariff/types'
import { inject } from 'vue'
import { useComparative } from '@/features/tariff/composables/index'
import type { Ref } from 'vue'

const tariffs: Ref<Insure[]> | undefined = inject('tariffs')

const { add } = useComparative()
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 10px;
  grid-area: tariffs;
  overflow-y: auto;
  padding: 20px 20px;
  max-height: 500px;
}
@media (max-width: 767px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
