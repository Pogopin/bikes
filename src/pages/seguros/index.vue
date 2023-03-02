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
<<<<<<< HEAD
=======
  <BaseInput
    :value="v"
    name="test"
    type="checkbox"
    placeholder="test plh"
    label="label test"
    @update:value="(val, n) => update(val, n)"
  />
>>>>>>> b17f02a8a3f5abc78b3c91a3583e9953c1f91cc9
</template>
<style scoped>
.mt {
  margin-top: -60px;
}
</style>
<script setup>
<<<<<<< HEAD
import { HeaderInner, Tarif, Advantages, Questions } from '../../components/widgets';
=======
import { BaseInput } from '../../components/ui'
import { HeaderInner, Tarif, Advantages, Questions } from '../../components/widgets'
import { ref } from 'vue'

const v = ref(true)

function update (value, name) {
  console.log('value :', value, name)
  console.log(typeof value)
  v.value = value
}

>>>>>>> b17f02a8a3f5abc78b3c91a3583e9953c1f91cc9
</script>