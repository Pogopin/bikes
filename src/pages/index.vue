<template>
  <Header></Header>
  <Medida></Medida>
  <Galery></Galery>
  <Tecnologia></Tecnologia>
</template>

<script>
import { Header } from '@/components'
import { Medida } from '@/components'
import { Galery } from '@/components'
import { Tecnologia } from '@/components'


export default {
  name: 'Index-page',
  components: {
    Header,
    Medida,
    Galery,
    Tecnologia,
  },
}
</script>