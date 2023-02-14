<template>
  <HeaderInner
    :text="'ESCOLHA A MELHORA PARA VOCÊ'"
    :title="'nossas bicicletas.'"
  />
  <BikesInfo
    :data="bikesExData"
  />
</template>

<script setup>
import { HeaderInner, BikesInfo } from '../../components/widgets';
import { useBikesStore } from '../../stores/bikesStore';
import { computed, onBeforeMount } from 'vue';

const bikesStore = useBikesStore();
const bikesExData = computed(() => bikesStore.getBikesData);
onBeforeMount(() => {
  bikesStore.getBikes();
});

</script>
