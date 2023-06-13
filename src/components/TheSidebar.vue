<template>
  <div 
    class="
      bg-white  
      z-20 
      dark:bg-darkColor 
      absolute 
      overflow-auto  
      w-[20%] 
      h-screen 
      py-4 
      shadow-md
      scrollbar-thumb-blue
      scrollbar-thumb-rounded
      scrollbar-track-blue-lighter
      scrollbar-w-2
      scrolling-touch
      ">
    <h2 class="dark:text-white text-darkColor font-bold tex-3xl pb-6 pl-6 capitalize">My App</h2>
    <ul class="pb-6">
      <link-item link="/" title="Dashboard"> <IconHome width="1.5em" height="1.5em" /> </link-item>
      <link-item link="/dashboard/forms" title="Forms"> <IconForm  width="1.5em" height="1.5em" /> </link-item>
      <link-item link="/dashboard/cards" title="Cards"> <IconCard width="1.5em" height="1.5em" /> </link-item>
      <link-item link="/dashboard/charts" title="Charts"> <IconChart width="1.5em" height="1.5em" /> </link-item>
      <link-item link="/dashboard/buttons" title="Buttons"> <IconButton width="1.5em" height="1.5em" /> </link-item>
      <link-item link="/dashboard/Modals" title="Modals"> <IconModal width="1.5em" height="1.5em" /> </link-item>
      <link-item link="/dashboard/tables" title="Tables"> <IconTable width="1.5em" height="1.5em" /> </link-item>
      <link-item link="/dashboard/pages" title="Pages"> <IconPage width="1.5em" height="1.5em" /> </link-item>
      
    </ul>
    <div class="flex justify-center">
      <button class="bg-primary text-white p-3 rounded-xl w-full mx-3 font-semibold flex justify-between items-center ">
        <span>Create account</span>
        <IconPlus width="1.5em" height="1.5em" />
      </button>
    </div>
    

  </div>
</template>

<script setup lang="ts">
  import LinkItem from './LinkItem.vue';
  import IconHome from '@/components/icons/IconHome.vue'
  import IconForm from '@/components/icons/IconForm.vue'
  import IconPlus from '@/components/icons/IconPlus.vue'
  import IconPage from '@/components/icons/IconPage.vue'
  import IconTable from '@/components/icons/IconTable.vue'
  import IconModal from '@/components/icons/IconModal.vue'
  import IconButton from '@/components/icons/IconButton.vue'
  import IconChart from '@/components/icons/IconChart.vue'
  import IconCard from '@/components/icons/IconCard.vue'
</script>

<style scoped>

.scrollbar-w-2::-webkit-scrollbar {
  width: 0.6rem;
  height: 0.4rem;
  cursor: pointer;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  background-color: #ccc;
  cursor: pointer;
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  background-color: #767879;
  cursor: pointer;
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0rem;
}
</style>