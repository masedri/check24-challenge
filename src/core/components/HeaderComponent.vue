<template>
  <header class="header">
    <Logo class="logo" @click="$router.push({ name: 'splash' })"></Logo>
  </header>
</template>
<script setup lang="ts">
import Logo from '@/assets/logo.svg'
</script>
<style scoped>
.logo {
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.logo:hover {
  transform: scale(1.1);
}
.header {
  background-color: var(--color-primary);
  grid-column: 1/2;
  grid-area: header;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
