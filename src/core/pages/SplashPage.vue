<template>
  <div class="splash">
    <Logo class="logo" />
  </div>
</template>
<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

setTimeout(() => {
  router.push('/home')
}, 2000)
</script>
<style scoped>
.splash {
  background-color: var(--color-primary);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 200px;
  height: 200px;
  fill-opacity: 0;
  stroke-dasharray: 1300;
  stroke-dashoffset: 1300;
  animation: dash 1.5s ease-in forwards;
}
@keyframes dash {
  70% {
    fill-opacity: 0;
  }
  100% {
    fill-opacity: 100%;
    stroke-dashoffset: 0;
    stroke-width: 1;
  }
}
</style>
