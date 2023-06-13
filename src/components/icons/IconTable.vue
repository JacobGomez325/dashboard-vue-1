<template>
  <svg :class="props.color" :height="props.height" :width="props.width" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
  </svg>
</template>

<script lang="ts" setup >
  const props = defineProps({
  width: {
    type: String ,
      default: '1em'
    },
    height: {
      type: String,
      default: '1em'
    },
    color:{
      type: String ,
      default: 'currentColor'
    }
  })
</script>

<style scoped>

</style>