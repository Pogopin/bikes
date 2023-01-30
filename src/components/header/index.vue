<template>
    <header class="header">
        <div class="header__container">
            <a class="header__logo" href="#"><img src="@/assets/img/bikcraft-logo.svg" alt="logo"></a>
            <nav class="header__navigation">
                <ul class="header__menu menu">
                    <li class="menu__item"
                        v-for="item in menu_items"
                        :key="item"
                    ><a class="menu__link" href="#">{{item}}</a></li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<style scoped>
.header {
    padding: 32px 0 32px;
    background-color: var(--bg-color);
}
.header__container {
    display: flex;
    align-items: center;
}
.header__navigation {
    margin-left: auto;
    
}
.menu {
    display: flex;
    gap: 40px;
    
}
.menu__link {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
}

</style>
<script setup lang="js">
import { ref } from 'vue';

export default {
	setup() {
        const menu_items = ref(['Bicicletas', 'Seguros', 'Contato']);
		return {menu_items};
	}
}

</script>