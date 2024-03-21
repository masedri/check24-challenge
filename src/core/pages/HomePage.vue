<template>
  <div class="grid">
    <Header></Header>
    <FiltersView></FiltersView>
    <TariffView></TariffView>
    <TariffComparative></TariffComparative>
  </div>
</template>
<script setup lang="ts">
import Header from '@/core/components/HeaderComponent.vue'
import TariffView from '@/features/tariff/views/TariffView.vue'
import FiltersView from '@/features/tariff/views/FiltersView.vue'
import TariffComparative from '@/features/tariff/views/TariffComparative.vue'

import type { Insure } from '@/features/tariff/types'
import { provide, ref } from 'vue'
import type { Ref } from 'vue'

const tariffs: Ref<Insure[]> = ref([
  {
    id: 'AXA-79',
    company: 'AXA',
    modality: {
      id: 3,
      name: 'Terceros ampliado'
    },
    price: 120000,
    final_price: 1,
    excess: 0,
    logo: 'https://api.seguros-coche.check24.es/v1/public/files/insurer/13/logo/axa.svg',
    grade: {
      total: 8.5
    },
    features: [
      {
        id: 'feature1',
        description: 'Asistencia en viaje ilimitada',
        icon: 'check',
        color: 'green'
      }
    ]
  },
  {
    id: 'MAPFRE-79',
    company: 'MAPFRE',
    modality: {
      id: 3,
      name: 'Terceros ampliado'
    },
    price: 73200,
    final_price: 0,
    excess: 0,
    logo: 'https://api.seguros-coche.check24.es/v1/public/files/insurer/22/logo/mapfre.svg',
    grade: {
      total: 8.5
    },
    features: [
      {
        id: 'feature1',
        description: 'Asistencia en viaje ilimitada',
        icon: 'check',
        color: 'green'
      },
      {
        id: 'feature2',
        description: 'Permite pago fraccionado',
        icon: 'check',
        color: 'green'
      }
    ]
  },
  {
    id: 'ZURICH-79',
    company: 'ZURICH',
    modality: {
      id: 4,
      name: 'Terceros con franquicia'
    },
    price: 85000,
    final_price: 1,
    excess: 40000,
    logo: 'https://api.seguros-coche.check24.es/v1/public/files/insurer/14/logo/zurich.svg',
    grade: {
      total: 7
    },
    features: [
      {
        id: 'feature1',
        description: 'Asistencia en viaje ilimitada',
        icon: 'check',
        color: 'green'
      },
      {
        id: 'feature3',
        description: 'Posibilidad de pago con tarjeta',
        icon: 'check',
        color: 'green'
      }
    ]
  },
  {
    id: 'CLEVEREA-79',
    company: 'CLEVEREA',
    modality: {
      id: 4,
      name: 'Terceros con franquicia'
    },
    price: 79500,
    final_price: 0,
    excess: 50000,
    logo: 'https://api.seguros-coche.check24.es/v1/public/files/insurer/25/logo/cleverea3.svg',
    grade: {
      total: 5.2
    },
    features: []
  }
])
provide('tariffs', tariffs)
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 2fr;
  grid-template-areas:
    'header'
    'filters'
    'tariffs'
    'comparative';
  height: 100vh;
}
</style>
