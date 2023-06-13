<template>
  <nav class="bg-white fixed top-0 left-0 right-0 shadow dark:bg-darkColor py-4 flex justify-between px-4">
    <div></div>
    <div class="relative ">
      <input type="text" class="pl-16 pr-4 py-2 dark:bg-gray-700 bg-gray-100 w-[500px] dark:text-white placeholder:text-gray-700  dark:placeholder:text-white rounded-md outline-none" placeholder="Search...">
      <span class="absolute top-2 left-4">
        <IconSearch width="1.3em" height="1.3em" color="dark:text-white text-primary" />
      </span>
    </div>
    <div class="flex space-x-4 items-center">
      <span v-if="isDark" key="dark" class="cursor-pointer" @click="toggleDark()"> <IconSun width="1.5em" height="1.5em" color="text-primary rounded-md  dark:text-white hover:border border-gray-400 " /> </span>
      <span v-else key="light" class="cursor-pointer" @click="toggleDark()"> <IconMoon width="1.5em" height="1.5em" color="text-primary rounded-md  dark:text-white hover:border border-gray-400 " /> </span>
      <span class="cursor-pointer"> <IconBell width="1.5em" height="1.5em" color="text-primary  rounded-md dark:text-white hover:border border-gray-400" /> </span>
      <UserMenu :datas="datas" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import UserMenu from '@/components/UserMenu.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconSun from './icons/IconSun.vue';
import IconMoon from './icons/IconMoon.vue';
import IconBell from './icons/IconBell.vue';

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
console.log(isDark.value)
const toggleDark = useToggle(isDark)
const datas =  reactive({
  firstName:'',
  lastName:''
})
</script>

<style scoped>

</style>