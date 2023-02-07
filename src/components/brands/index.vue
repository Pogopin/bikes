<template>
    <section class="brands">
        <div class="container-fliud">
            <h1 class="brands__title">Nossos parceiros.</h1>
            <div class="brands__content">
                <table>
                    <tr v-for="el in brands"
                        :key="el.id"
                    >
                        <td v-for="item in el.img"
                            :key="item.img"
                        ><img :src="getImageUrl(item.img)" alt="logo">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container-fliud {
    max-width: 1490px;
    padding: 0 15px;
    margin: 0 auto;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    color: var(--table-color);
}
tr:first-of-type td {
  border-top: 1px solid var(--text-color);
  border-left: 1px solid var(--text-color);
}
tr:last-of-type td {
  border-bottom: 1px solid var(--text-color);
  border-left: 1px solid var(--text-color);
}
td:last-of-type {
    border-right: 1px solid var(--text-color);
}
td {
    border: 3px solid var(--table-color);
    width: 348px;
    vertical-align: middle;
    text-align: center;
    padding: 45px 0;
}
.brands {
    padding: 200px 0 120px;
}
.brands__title {
    margin-bottom: 105px;
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    padding-left: 110px;
}
</style>
<script setup>
function getImageUrl (name) {
    return new URL('../../assets/img/brands/' + name, import.meta.url).href
}
const brands = [
    {
        id: 1,
        img: [
            {img: 'ranek.svg'},
            {img: 'caravan.svg'},
            {img: 'dogs.svg'},
            {img: 'handel.svg'},
        ]
    },
    {
        id: 2,
        img: [
            {img: 'surfbot.svg'},
            {img: 'wildbeast.svg'},
            {img: 'flexblog.svg'},
            {img: 'lescone.svg'},
        ]
    },
]
</script>
