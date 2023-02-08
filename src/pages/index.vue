<template>
    <Medida />
    <Galery
      :data="bikesStore.$state.bikesData"
    />
    <Tecnologia />
    <Brands />
    <Reviews />
    <Tarif />
    <Contacts />
</template>

<script setup>
import { Medida, Galery, Tecnologia, Brands, Reviews, Tarif, Contacts } from '../components'
import { useBikesStore } from '../stores/bikesStore'
import { computed, onBeforeMount } from 'vue'

const bikesStore = useBikesStore();
const timer = setInterval(()=> {
  if(bikesStore.isLoading) {
    console.log('данные загрузились');
    // const dataB = computed(() => bikesStore.getBikesData);
    clearInterval(timer);
    return;
  }
},1000)

onBeforeMount(() => {
  bikesStore.getBikes();
});
</script>