<script setup>
// import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";
// import TheNavMenu from "@/components/TheNavMenu.vue";
//
// useLifecycleLogger({ name: "AppLayoutError" });
</script>

<template>
  <div>
    <main class="app-layout-error-main bg-red-600">
      <div>AppLayoutError</div>
      <slot />
    </main>
  </div>
</template>
