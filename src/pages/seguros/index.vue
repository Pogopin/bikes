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
  <BaseInput
    :value="v"
    name="test"
    type="checkbox"
    placeholder="test plh"
    label="label test"
    @update:value="(val, n) => update(val, n)"
  />
</template>
<style scoped>
.mt {
  margin-top: -60px;
}

</style>
<script setup>
import { BaseInput } from '../../components/ui'
import { HeaderInner, Tarif, Advantages, Questions } from '../../components/widgets'
import { ref } from 'vue'

const v = ref(true)

function update (value, name) {
  console.log('value :', value, name)
  console.log(typeof value)
  v.value = value
}

</script>