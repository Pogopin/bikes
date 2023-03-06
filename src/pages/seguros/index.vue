<template>
  <HeaderInner
    text="ESCOLHA O SEGURO"
    title="você seguro."
  />
  <Tarif
    class="mt"
    :visibleTitle="false"
  />
  <Advantages />
  <Questions />
</template>
<style scoped>
.mt {
  margin-top: -60px;
}
</style>
<script setup>
import { HeaderInner, Tarif, Advantages, Questions } from '../../components/widgets';
</script>