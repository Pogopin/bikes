<template>
    <section class="medida">
        <div class="medida__container">
            <div class="medida__item">
                <h1 class="medida__item-title">bicicletas feitas sob medida<span>.</span></h1>
                <p class="medida__item-text">Bicicletas elétricas de alta precisão e qualidade,  feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.</p>
                <baseButton 
                    :title="'Selecione a sua'"
                >
                </baseButton>                  
            </div>
            <div class="medida__item">
                <img class="intro-img" src="@/assets/img/img-intro.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
.medida {
    padding: 196px 0 120px;
    background-color:var(--bg-color);
}
.medida__container {
    display: flex;
    position: relative;
    gap: 47px;
}
.medida__item {
    max-width: 553px;
    color: var(--text-color);
}
.intro-img {
    position: absolute;
    top: -202px;
}
.medida__item-title {
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 36px;
}
.medida__item-title span {
    color: var(--accent-color);
}
.medida__item-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 20px;
    color: var(--second-text-color);
}
</style>
<script setup>
import baseButton from '@/components/ui/button.vue'
</script>
