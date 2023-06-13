<template>
  <router-link   class="flex items-center font-semibold py-4 px-3 z-10 relative text-darkColor dark:text-white  transition ease-in-out duration-500  cursor-pointer  text-sm space-x-3"  :to="link">
    <span  :title="`${props.title}`" class=" ">
      <slot></slot>
    </span>
    <span >{{title}}</span>
  </router-link>
</template>

<script setup lang="ts">
  import { RouterLink} from 'vue-router'
  const props = defineProps({
    title: {
      title: String ,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
  })
  
</script>

<style  scoped>
.router-link-exact-active
{
  font-weight: bold;
  border-left: 5px solid #7e3af2;
  border-radius: 3px;
  margin: 1px 0;
}
</style>