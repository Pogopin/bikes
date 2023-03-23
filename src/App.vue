<template>
  <div class="layout">
    <div class="layout__content">
      <AppLayout>
        <RouterView />
      </AppLayout>
    </div>
  </div>
</template>

<script setup>
import AppLayout from './layouts/AppLayout.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout__content {
  flex: 1;
}

.test {
  width: 100%;
  max-width: 300px;
}

.error {
  display: none;
}

.visible {
  display: block;
  color: red;
  border: 1px solid red;
}
</style>
