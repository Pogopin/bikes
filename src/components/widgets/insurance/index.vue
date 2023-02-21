<template>
  <section class="insurance">
    <div class="insurance__container">
        <div class="insurance__item">
            <img src="@/assets/img/seguros.jpg" alt="">
        </div>
        <div class="insurance__item item">
            <h1 class="insurance__item-title">pedale mais tranquilo com nosso <span>seguro.</span></h1>
            <p class="insurance__item-text">Inscreva-se em um dos planos do nosso seguro Bikecraft e aproveite diversos benefícios.</p>
            <BaseButton
                title="CONHEçA MAIS"
            >
            </BaseButton>
        </div>
    </div>
    
  </section>
  <div class="line-bottom"></div>
</template>
<style scoped>
.insurance {
    padding: 60px 0 60px;
    background-color: var(--bg-second-color);
}
.insurance__container {
    display: flex;
    
    position: relative;
    justify-content: space-between;
}
.insurance__item img{
    position: absolute;
    top: -190px;
    left: -6%;
}
.insurance__item {
    max-width: 512px;
}
.insurance__item:last-of-type {
    margin-right: 5%;
}
.insurance__item-title {
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 32px;
    color: var(--text-color);
}
.insurance__item-title span {
    color: var(--accent-color);
}
.insurance__item-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 20px;
    color: var(--second-text-color);
}
.line-bottom {
    padding: 30px 0 90px;
    background-color: var(--bg-color);
}
</style>
<script setup>
import { BaseButton } from '../../ui'

</script>
