<template>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" :class="props.color" :height="props.height" :width="props.width" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M1 11v10h5v-6h4v6h5V11L8 6z"></path><path d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"></path></svg>
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