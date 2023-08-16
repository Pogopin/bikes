<template>
    <HeaderInner
        text="COTAÇÕES NO SEU EMAIL."
        title="solicite um orçamento."
    />
    <OrderForm
        :bikes="listBikes"
    />
    <!-- {{listBikes}} -->
</template>

<script setup>
import { defineProps, computed, onBeforeMount } from 'vue'
import { HeaderInner, OrderForm } from '../../components/widgets/'
import { useBikesStore } from '../../stores/bikesStore'

// const props = defineProps({
//     id: String
// })
const bikesStore = useBikesStore()
const listBikes = computed(() => bikesStore.getBikesData.map(function(currentEl, i) {
    let copyEl = Object.assign({}, currentEl);
    copyEl.className = 'RadioButton';
    copyEl.name = 'selectBike';
    copyEl.checked = false;
    copyEl.value = nameBikes[i];
    return copyEl;
}))
const nameBikes = [
    'Nimbus Stark', 'Magic Migth', 'Nebula Cosmic'
]

onBeforeMount(() => {
  bikesStore.getBikes()
})
</script>
