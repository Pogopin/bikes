<template>
  <HeaderInner
    text="ESCOLHA O SEGURO"
    title="você seguro."
  />
  <Tarif
    class="mt"
    :visibleTitle="false"
  />
  
</template>
<style scoped>
.mt {
  margin-top: -60px;
}

</style>
<script setup>
import { HeaderInner, Tarif } from '../../components/widgets'
</script>