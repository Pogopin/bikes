<script setup>

</script>

<template>
  <div>
    <main class="app-layout-login-main">
      <div>LOGIN LAYOUT</div>
      <p>Email</p>
      <input type="text">
      <p>Password</p>
      <input type="text">
      <div class="wrapper w-full h-screen flex justify-center items-center bg-sky-300">
        <slot/>
      </div>
    </main>
  </div>
</template>
