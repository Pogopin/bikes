<template>
    <section class="tecnologia">        
            <div class="tecnologia__content ">
                <div class="tecnologia__content-item item-content">
                    <p class="item-content__over-title">Tecnologia avançada</p>
                    <h1 class="item-content__title">você escolhe as suas cores e componentes.</h1>
                    <p class="item-content__text">Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.</p>
                    <a href="#" class="item-content__link">ESCOLHA UM MODELO</a>
                    <div class="item-content__info">
                        <div class="item-content__info-item item-info">
                            <img class="item-info__img" src="@/assets/img/icon/eletrica.svg" alt="eletrica">
                            <h3 class="item-info__title">Motor Elétrico</h3>
                            <p class="item-info__text">Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.</p>
                        </div>
                        <div class="item-content__info-item item-info mw">
                            <img class="item-info__img" src="@/assets/img/icon/rastreador.svg" alt="rastreador">
                            <h3 class="item-info__title">Rastreador</h3>
                            <p class="item-info__text">Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.</p>
                        </div>
                    </div>                
                </div>
                <div class="tecnologia__content-item item-content">
                    <img class="item-content__img" src="@/assets/img/diferencial.jpg" alt="">
                </div>
            </div>        
    </section>
</template>
<style scoped>
.tecnologia {
    background-color: var(--bg-color);
    padding: 80px 0 88px;
}
.tecnologia__content-item {
    max-width: 598px;    
}
.item-content__over-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: var(--second-text-color);
    text-transform: uppercase;
    margin-bottom: 20px;
}
.item-content__title {
    font-weight: 600;
    font-size: 4rem;
    line-height: 5rem;
    color: var(--text-color);
    margin-bottom: 20px;
}
.item-content__text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: var(--second-text-color);
    margin-bottom: 20px;
    max-width: 535px;
}
.item-content__link {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: var(--accent-color);
}
.item-content__info {
    margin-top: 84px;
    display: flex;
    gap: 40px;
}
@media (max-width: 650px) {
    .item-content__info {
		margin-top: 20px;
	}
}
@media (max-width: 650px) {
    .item-content__info {
		flex-direction: column;
	}
}
.item-content__info-item {
    max-width: 264px;
}
.mw {
    max-width: 320px;
}
.item-info__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: var(--text-color);
    margin: 8px 0 8px;
}
.item-info__text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--second-text-color);
}
.tecnologia__content {
    max-width: 1270px;
    display: flex;
    gap: 34px;
    position: relative;
    padding: 0 15px;
    margin: 0 auto;
}
@media (max-width: 1425px) {
    .tecnologia__content {
		flex-direction: column;
        align-items: center;
	}
}
.item-content__img {
    position: absolute;
    top: -165px;
}
@media (max-width: 1425px) {
    .item-content__img {
		position: static;
	}
}
</style>
