<template>
  <div v-if="!moreInfoData">Данные загружаются!</div>
  <div v-else>
    <HeaderInner
      :text="'R$ ' + moreInfoData.price.toString()"
      :title="title"
    />
    <MoreInfoCard
      :specifications="moreInfoData"
    />
    <Galery
      class="mt"
      :data="bikesMoreInfo"
    >
    </Galery>
    <Insurance />
  </div>
</template>
<style scoped>
.mt {
  margin-top: -120px;
}
</style>
<script setup>
import { HeaderInner, MoreInfoCard, Galery, Insurance } from '../../components/widgets'
import { useBikesStore } from '../../stores/bikesStore'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const bikesStore = useBikesStore()

const bikesMoreInfo = computed(() => bikesStore.getBikesData)

const id = computed(() => route.params.id)

const moreInfoData = computed(() => bikesMoreInfo.value.find(el => el.id === Number(id.value)))

const title = computed(() => {
  const split =  moreInfoData.value.title.split(' ')
  const titleMerge = split[0] + ' ' + split[1]
  return titleMerge
  
})

onBeforeMount(() => {
  bikesStore.getBikes()
})
</script>