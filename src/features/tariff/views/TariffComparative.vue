<template>
  <div class="container">
    <div class="header">
      <h4>Comparar Tarifas</h4>
      <button v-if="tariffComparative.length > 1" class="btn" @click="showDiffTariffs">{{ keysToHidden.length ? 'Mostrar  Tarifas' : 'Mostrar diferencias Tarifas' }}</button>
    </div>
    <div class="comparative">
      <Transition name="fade" mode="out-in">
        <TariffCard v-if="tariffComparative[0]" v-bind="tariffComparative[0]" :keysToHidden="keysToHidden" @action="remove"></TariffCard>
      </Transition>
      <Transition name="fade" mode="out-in">
        <TariffCard v-if="tariffComparative[1]" v-bind="tariffComparative[1]" :keysToHidden="keysToHidden" @action="remove"></TariffCard>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import TariffCard from '@/features/tariff/components/TariffCard.vue'
import { inject, ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { Insure } from '@/features/tariff/types'
import { useComparative } from '@/features/tariff/composables/index'

const tariffs: Ref<Insure[]> | undefined = inject('tariffs')
const { ids, remove } = useComparative()

const tariffComparative = computed(() => tariffs!.value.filter((tariff) => ids.value.includes(tariff.id)))

const getSameKeys = (obj1: Insure, obj2: Insure) => {
  const keysUniques = new Set([
    ...['modality', 'price', 'grade', 'excess'].filter((key) => JSON.stringify(obj1[key as keyof Insure]) === JSON.stringify(obj2[key as keyof Insure])),
    ...getIdsFeatures(obj1).filter((id) => getIdsFeatures(obj2).includes(id)),
    ...getIdsFeatures(obj2).filter((id) => getIdsFeatures(obj1).includes(id))
  ])

  return [...keysUniques]
}
const getIdsFeatures = (obj: Insure) => obj.features?.map((feature) => feature.id)

const showDiffTariffs = () => {
  if (keysToHidden.value.length) {
    keysToHidden.value = []
    return
  }
  if (tariffComparative.value.length > 1) keysToHidden.value = getSameKeys(tariffComparative.value[0], tariffComparative.value[1])
}

const keysToHidden: Ref<string[]> = ref([])
</script>

<style scoped>
.container {
  grid-area: comparative;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  height: 40px;
}
.comparative {
  display: grid;
  height: fit-content;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 20px;
}

@media (max-width: 767px) {
  .comparative {
    display: grid;
    grid-template-columns: 1fr;
  }
}
.btn {
  height: fit-content;
  background-color: var(--color-primary);
  padding: 10px;
  border: 0px;
  color: white;
  border-radius: 10px;
}
.btn:hover {
  cursor: pointer;
  background-color: var(--color-secondary);
  transition: all 0.3s ease;
}
</style>
