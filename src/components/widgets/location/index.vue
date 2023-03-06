<template>
  <section class="location">
    <div class="location__container">
        <h1 class="location__title">loja locais.</h1>
        <div class="location__block block">
            <div class="block__item"
                v-for="el in locationData"
                :key="el.id"
            >
                <div class="block__item-map">
                    <div v-html="el.src"></div>
                </div>   
<!--                 
                <yandex-map :coords="[55.751574, 37.573856]">
                    <ymap-marker :coords="[55.751999, 37.617734]" />
                </yandex-map> -->

                <div class="block__item-addres addres">
                    <h3 class="addres__city">{{el.city}}</h3>
                    <div class="addres__block">
                        <div class="addres__block-item">
                            <p>{{el.addres.street}}</p>
                            <p>{{el.addres.place}}</p>
                        </div>
                        <div class="addres__block-item">
                            <p>{{el.addres.email}}</p>
                            <p>{{el.addres.tel}}</p>
                        </div>
                    </div>
                    <div class="block__item-time">{{el.addres.time}}</div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>
<style scoped>
.location {
    margin-bottom: 125px;
}
.location__title {
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    color: var(--bg-second-color);
    margin-bottom: 60px;
}
.location__block {
    display: flex;
    justify-content: space-between;
}
.block__item {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding-bottom: 32px;
}
.block__item-map {
    margin-bottom: 32px;
}
.addres__city {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: var(--bg-color);
    margin-bottom: 33px;
    position: relative;
    padding-left: 20px;
}
.addres__city::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 8px;
    background-color: var(--accent-color);
    left: 0;
    top: 16px;
}
.addres__block {
    display: flex;
    gap: 60px;
    margin-bottom: 32px;
}
.addres__block-item {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: var(--bikes-card-color);
    border-left: 2px solid var(--table-color);
    padding-left: 13px;
    
}
.addres__block-item:first-of-type {
    margin-left: 20px;
}
.block__item-time {
    font-weight: 600;
    font-size: 15px;
    line-height: 32px;
    color: var(--bg-color);
}
.block__item-time {
    padding-left: 25px;
    position: relative;
}
.block__item-time::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url('@/assets/img/icon/horario.svg');
    left: 0;
    top: 5px;
}
.addres {
    padding-left: 50px;
}
</style>

<script setup>
import { locationData } from '../../../config/locationConfig.js';
import { YmapPlugin } from 'vue-yandex-map';
import { ref } from 'vue';

// const iframeCode = ref(
//     '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc1095825bfa463cf13781380e794b1d8697f16fd5acfa2978c558df92310440&amp;source=constructor" width="560" height="260" frameborder="0"></iframe>'
// )

</script>