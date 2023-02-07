<template>
    <Medida />
    <Galery />
    <Tecnologia />
    <Brands />
    <Reviews />
    <Tarif />
    <Contacts />
</template>

<script setup>
import { Medida, Galery, Tecnologia, Brands, Reviews, Tarif, Contacts } from '../components'

import { useBikesStore } from '../stores/bikesStore'
import { computed, onMounted } from 'vue'

const bikesStore = useBikesStore()

const data = computed(() => bikesStore.getBikesData)
console.log('data :', data)

onMounted(() => {
  bikesStore.getBikes()
})
</script>