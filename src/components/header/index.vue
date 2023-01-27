<template>
    <header class="header">
        <div class="header__container">
            <a class="header__logo" href="#"><img src="@/assets/img/bikcraft-logo.svg" alt="logo"></a>
            <nav class="header__navigation">
                <ul class="header__menu menu">
                    <li class="menu__item"><a class="menu__link" href="#">Bicicletas</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Seguros</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Contato</a></li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<style scoped>
.header {
    padding: 32px 0 32px;
    background-color: black;
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
    color: #FFF;
    text-decoration: none;;
}

</style>