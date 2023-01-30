<template>
    <button
        :class="background"
    >{{text}}</button>
</template>

<style scoped>
button {
    color: #332200;
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 32px;
    /* background-color: var(--accent-color); */
    border-radius: 5px;
    cursor: pointer;
}

.btn {
    background-color: var(--accent-color);;
}
</style>

<script setup lang="js">
import { computed, ref } from 'vue';

export default {
    name: 'BaseButton',
    props: {
        title: {
            type: String,
            default: '----'
        },
        backgroundColor: {
            type: Boolean,
            default: 'false'
        }
                
    },
    setup(props, {emit}) {
        const click = emit('click');
        const text = props.title;
        const background = {
            'btn': props.backgroundColor
        }

        return {click, text, background}
	}
    

}
</script>
