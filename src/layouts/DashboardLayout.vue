<template>
  <TheNavbar /> 
  <div class="flex ">
    <TheSidebar />
    <div class="pt-[80px] pl-[20%] w-full h-screen overflow-auto dark:bg-darkBg bg-white ">
      <main class="p-4">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue'
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<style scoped>

</style>