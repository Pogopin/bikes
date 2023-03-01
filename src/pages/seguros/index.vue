<template>
  <HeaderInner
    text="ESCOLHA O SEGURO"
    title="você seguro."
  />
  <Tarif
    class="mt"
    :visibleTitle="false"
  />
  <form @submit.prevent="formSubmit" >
    <input type="checkbox" v-model="rest" value="Cyprus"><label>Кипр</label>
    <input type="checkbox" v-model="rest" value="Israel"><label>Израиль</label>
    <input type="checkbox" v-model="rest" value="Greece"><label>Греция</label>

    <button type="submit">Отправить</button>
  </form>
  


  <!-- {{search}} -->
</template>
<style scoped>
.mt {
  margin-top: -60px;
}

</style>
<script setup>
import { HeaderInner, Tarif } from '../../components/widgets'

import { ref } from 'vue'
const rest = ref([]);

function formSubmit () {
  console.log(rest)
}



</script>