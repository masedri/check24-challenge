import { inject, ref } from 'vue'
import type { Ref } from 'vue'
import type { Insure } from '../types'

const ids: Ref<string[]> = ref([])
export const useComparative = () => {
  const add = (id: string) => {
    if (!ids.value.includes(id)) ids.value.push(id)
  }
  const remove = (id: string) => {
    const index = ids.value.indexOf(id)
    if (ids.value.includes(id)) ids.value.splice(index, 1)
  }

  return { ids, add, remove }
}

export const useFilters = () => {
  const tariffs: Ref<Insure[]> | undefined = inject('tariffs')
  const originalTariffs = JSON.parse(JSON.stringify(tariffs?.value))

  const applyFilter = ({ id: filterId, value }: any) => {
    //TODO REFACTOR
    //TODO ADD logic to do composite filters
    if (filterId === 'final_price') {
      if (value) tariffs!.value = tariffs!.value.filter((tariff) => tariff.final_price == value)
      if (!value) tariffs!.value = originalTariffs
    }
    if (filterId === 'price') {
      tariffs!.value = originalTariffs
      tariffs!.value = tariffs!.value.filter((tariff) => tariff.price > value)
    }
    if (filterId === 'modality') {
      tariffs!.value = originalTariffs
      tariffs!.value = tariffs!.value.filter((tariff) => tariff.modality.id === value[0])
    }
  }

  return { applyFilter }
}
