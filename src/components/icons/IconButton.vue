<template>
  <svg :class="props.color" :height="props.height" :width="props.width" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
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