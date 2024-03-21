<template>
  <div class="tariff tariff-box" @click="action">
    <section class="logo">
      <img :src="logo" alt="logo insures" width="150" />
    </section>
    <section class="modality" :class="hidden('modality')">
      <p>
        {{ modality.name }}
      </p>
    </section>
    <section class="grade" :class="hidden('grade')">
      <CircleGrade :grade="grade.total"></CircleGrade>
      <div class="grade--text">
        <p>Grado</p>
        <span>
          {{ grade.total.toFixed(1) }}
        </span>
      </div>
    </section>

    <section v-if="features.length" class="features">
      <h3>Coberturas</h3>
      <div>
        <span :class="hidden(feature.id)" v-for="(feature, index) in features" :key="index">
          <p>
            {{ feature.description }}
          </p>
        </span>
      </div>
    </section>
    <section class="detail">
      <div :class="hidden('price')">
        <p>Precio</p>
        <div>{{ euro.format(price) }}</div>
      </div>
      <div v-if="excess" :class="hidden('excsss')">
        <p>Franquicia</p>
        <p>{{ euro.format(excess) }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Insure } from '@/features/tariff/types'
import CircleGrade from '@/assets/CircleGrade.vue'
import { defineProps } from 'vue'
import { euro } from '@/core/utils/index'

const props = defineProps<Insure & { keysToHidden?: string[] }>()
const emit = defineEmits(['action'])

const hidden = (key: string) => props.keysToHidden?.includes(key) && 'hidden'
const action = () => emit('action', props.id)
</script>

<style scoped>
.tariff {
  display: grid;
  background-color: white;
  grid-template-columns: auto 1fr 1fr;
  gap: 10px;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'logo . modality'
    'grade features detail';
}
.tariff-box {
  cursor: pointer;
  min-height: 200px;
  box-shadow: #919090 0px 1px 10px 1px;
  border: 1px solid transparent;
  align-items: start;
  overflow: hidden;
  border-radius: 10px;
}

.tariff-box:hover {
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: all 0.2s ease-in;
}
.logo {
  grid-area: logo;
  grid-row: 1/2;
  align-self: self-start;
  padding-left: 10px;
}
.grade {
  position: relative;
  grid-area: grade;
  justify-self: center;
}
.grade--text {
  position: absolute;
  top: 40px;
  left: 42px;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.modality {
  grid-area: modality;
  background-color: var(--color-primary);
  padding: 5px;
  color: white;
  border-radius: 0px 10px;
  height: min-content;
  text-align: end;
}
.features {
  grid-area: features;
  justify-self: start;
  padding: 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  overflow: hidden;
}

.detail {
  grid-area: detail;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  gap: 20px;
}
.hidden {
  opacity: 0.3;
}
</style>
