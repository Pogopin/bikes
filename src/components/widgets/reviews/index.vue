<template>
    <section class="reviews">
        <div class="reviews__content">
            <div class="reviews__img">
                <img src="@/assets/img/depoimento.jpg" alt="depoimento">
            </div>
            <div class="reviews__item item">
                <p class="item__text">Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo. </p>
                <p class="item__author">Ana Júlia</p>
            </div>
        </div>
    </section>    
</template>

<style scoped>
.reviews__content {
    display: flex;
    justify-content: center;
}
@media (max-width: 1650px) {
    .reviews__content {
		flex-direction: column;
        align-items: center;
	}
}
.reviews__item {
    background-color: var(--accent-color);
    padding: 296px 233px 144px 80px;
    position: relative;
}
@media (max-width: 1650px) {
    .reviews__item {
		padding: 7rem 5rem 5rem 7rem;
	}
}
.reviews__img {
    max-width: 40%;
}
.reviews__img img {
    height: 100%;
}
.item__text {
    position: relative;
    max-width: 583px;
    font-family: 'Merriweather', sans-serif;
    font-weight: 900;
    font-style: italic;
    font-size: 36px;
    line-height: 48px;
}
@media (max-width: 1650px) {
    .item__text {
		font-size: 2rem;
	}
}
.item__text::after {
    content: '';
    position: absolute;
    width: 39px;
    height: 35px;
    background: url('@/assets/img/icon/2.svg');
    bottom: -3px;
}
.item__text::before {
    content: '';
    position: absolute;
    width: 39px;
    height: 35px;
    background: url('@/assets/img/icon/1.svg');
    left: -40px;
}
.item__author {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: var(--accent-second-color);
    margin-top: 32px;
}
</style>