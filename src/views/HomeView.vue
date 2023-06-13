
<template>
  <dashboard-layout>
    <div >
      <h1 class="text-darkColor dark:text-white text-3xl font-semibold py-3">Dashboard</h1>
      <div class="px-3 bg-primary text-white font-semibold rounded-md flex justify-between items-center py-4">
        <div class="flex space-x-3">
          <IconStar width="1.3em" height="1.3em" />
          <span>Star this projet on GitHub</span>
        </div>
        <div class="flex space-x-3">
          <span>View more</span>
          <IconRight width="1.3em" height="1.3em" />
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>
<script setup lang="ts">
  import DashboardLayout from '@/layouts/DashboardLayout.vue'
  import IconRight from '@/components/icons/IconRight.vue'
  import IconStar from '@/components/icons/IconStar.vue'
</script>
