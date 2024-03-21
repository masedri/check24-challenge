<template>
  <svg width="125" height="125" viewBox="0 0 42 42">
    <circle
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#d2d3d4"
      stroke-width="3"
    ></circle>
    <circle
      class="donut-segment"
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke-width="3"
      stroke-dashoffset="0"
    ></circle>
  </svg>
</template>
<script setup lang="ts">
const { grade } = defineProps<{
  grade: number
}>()

const percentage = grade * 10
</script>
<style scoped>
.donut-segment {
  fill-opacity: 0;
  stroke-dasharray: v-bind(percentage) 100;
  animation: progresive 1.5s ease-in;
  stroke: var(--color-secondary);
}

@keyframes progresive {
  0% {
    fill-opacity: 0%;
    stroke-dasharray: 0 100;
  }
}
</style>
