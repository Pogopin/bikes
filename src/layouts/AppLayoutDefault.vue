<script setup>
// import TheHeader from '@/components/TheHeader.vue'
// import TheFooter from '@/components/TheFooter.vue'
// import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger'
// import TheNavMenu from '@/components/TheNavMenu.vue'

// useLifecycleLogger({ name: 'AppLayoutDefault' })
</script>

<template>
  <main class="app-layout-default-main p-2 bg-amber-50">
    <p>
      DEFAULT LAYOUT
    </p>
    <div>Реклама</div>
    <div>
      Navigation
    </div>
      <slot />
    <div>Посты</div>
  </main>
</template>
