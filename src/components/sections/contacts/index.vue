<template>
    <section class="contacts">
        <div class="contacts__container">
            <div class="contacts__logo">
                <img src="@/assets/img/bikcraft-logo.svg" alt="logo">
            </div>
            <div class="contacts__content content">
                <div class="content__item">
                    <h3 class="contact__item-title">Contato</h3>
                    <ul class="content__item-list">
                        <li>+55 22 99999-9999</li>
                        <li>contato@bikcraft.com</li>
                        <li>Rua Ali Perto, 42 - Botafogo</li>
                        <li>Rio de Janeiro - RJ</li>
                    </ul>
                    <div class="content__item-social">
                        <img src="@/assets/img/icon/instagram.svg" alt="instagram-logo">
                        <img src="@/assets/img/icon/facebook.svg" alt="facebook-logo">
                        <img src="@/assets/img/icon/youtube.svg" alt="youtube-logo">
                    </div>
                </div>
                <div class="content__item">
                    <h3 class="contact__item-title">INFORMAÇÕES</h3>
                    <ul class="content__item-list">
                        <li>Bicicletas</li>
                        <li>Seguros</li>
                        <li>Contato</li>
                        <router-link to="/conditions" class="td">
                            <li>Termos e Condições</li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.td {
    text-decoration: none;
}
.contacts {
    padding: 40px 0 60px;
    background-color: var(--bg-color);
}
.contacts__container {
    display: flex;
    gap: 164px;
}
@media (max-width: 900px) {
    .contacts__container{
        flex-direction: column;
        gap: 7rem;
        align-items: center;
	}
}
.contacts__logo {
    max-width: 136px;
    align-self: start;
}
.contact__item-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: var(--text-color);
    margin-bottom: 32px;
    text-transform: uppercase;
}
.content__item-list {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 32px;
    
}
.content__item-list li {
    color: var(--text-color);
}
.content__item-social {
    display: flex;
    gap: 32px;
}
.contacts__content {
    color: var(--second-text-color);
    display: flex;
    max-width: 80%;
    width: 55%;
    justify-content: space-between;
}
@media (max-width: 840px) {
    .contacts__content {
        flex-direction: column;
        gap: 7rem;
        align-items: center;
	}
}
@media (max-width: 840px) {
    .content__item:first-of-type {
        margin-right: -4rem !important;
	}
}
.content__item:first-of-type {
    margin-right: 272px;
}
@media (max-width: 1024px) {
    .content__item:first-of-type{
		margin-right: 3rem;
	}
}
</style>
