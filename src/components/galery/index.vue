<template>
    <section class="galery">
        <div class="container-fliud">
            <h1 class="galery__title">escolha a sua.</h1>
            <div class="galery__bikes bikes">
                <div class="bikes__item"
                v-for="bike in bikes"
                :key="bike.id"
                >
                    <img class="bikes__item-img" src="@/assets/img/bicicleta1.jpg">
                    
                    
                    <!-- <img :src="require('@/assets/img/bicicleta1.jpg')"> -->
                    <h3 class="bikes__item-title">{{bike.name}}</h3>
                    <p class="bikes__item-price">{{ bike.price}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.galery {
    padding: 240px 0 200px;
}
.container-fliud {
    max-width: 1490px;
    padding: 0 15px;
    margin: 0 auto;
}
.galery__title {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 42px;
    margin-left: 116px;
}
.galery__bikes {
    display: flex;
    gap: 40px;
}
.bikes__item-img {
    margin-bottom: 16px;
}
.bikes__item-title {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    position: relative;
    padding-left: 20px;
}
.bikes__item-title::before {
    content: '';
    background-color: #FFBB00;
    position: absolute;
    width: 12px;
    height: 8px;
    left: 0;
    top: 17px;
}
.bikes__item-price {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    padding-left: 21px;
}

</style>

<script setup lang="js">
import { ref, onMounted, onBeforeMount } from 'vue';
import { bikes } from '@/config/config.js';


export default {
	
	setup() {
			
		return {bikes};
	}

    //data() {
    //   return {
    //       bikes
    //   };
    //}
}


 
</script>
