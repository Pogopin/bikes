<template>
  <Header></Header>
  <Medida></Medida>
  <Galery></Galery>
  <Tecnologia></Tecnologia>
  <Brands></Brands>
  <Reviews></Reviews>
</template>

<script>
import { Header } from '@/components'
import { Medida } from '@/components'
import { Galery } from '@/components'
import { Tecnologia } from '@/components'
import { Brands } from '@/components'
import { Reviews } from '@/components'

export default {
  name: 'Index-page',
  components: {
    Header,
    Medida,
    Galery,
    Tecnologia,
    Brands,
    Reviews
  },
}
</script>