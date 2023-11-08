<template>
    <header class="header">
        <div class="header__container">
            <router-link to="/">
                <img src="../../../assets/img/bikcraft-logo.svg" alt="logo">
            </router-link>
            <nav class="header__navigation">
                <ul class="header__menu menu">
                    <li class="menu__item"
                        v-for="item in menu_items"
                        :key="item"
                    >
                    <router-link :to="item.page" class="menu__link">{{item.title}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.router-link-active.menu__link {
    position: relative;
    padding-bottom: 3px;
    border-bottom: 2px solid white;
}
.header {
    padding: 32px 0 32px;
    background-color: var(--bg-color);
}
.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
@media (max-width: 510px) {
    .header__container {
        flex-direction: column;    
        align-items: center;
	}
}
.header__navigation {
    margin-left: auto;
}
@media (max-width: 510px) {
    .header__navigation {
        margin-left: 0;    
	}
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

<script setup>
const menu_items = [
    { title: 'Bicicletas', page: '/bicicletas' },
    { title: 'Seguros', page: '/seguros' },
    { title: 'Contato', page: '/contato' }
]
</script>