<template>
  <section class="bikes">
    <ExtendedBikeCard
        v-for="el in data"
        :key="el.id"
        :extendedData="el"
    />
  </section>
</template>
<script setup>
import { ExtendedBikeCard } from '../index'
import { defineProps } from 'vue'

defineProps({
    data: Object
})
</script>
