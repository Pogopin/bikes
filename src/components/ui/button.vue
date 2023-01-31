<template>
    <button
        :class="styleButton"
    >{{text}}</button>
</template>

<style scoped>

.btn {
    color: #332200;
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 32px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--accent-color);
}
.customButton {
    color: var(--c4);
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 32px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--bg-second-color);
}

</style>

<script setup lang="js">
import { computed } from 'vue'
export default {
    name: 'Button',
    props: {
        title: {
            type: String,
            default: '----'
        },
        btn: {
            type: Boolean,
            default: 'false'
        },
        customButton: {
            type: Boolean,
            default: 'false'
        },
                
    },
    setup(props) {
        const text = props.title;
        const styleButton = computed(()=> {
            return {
                btn: props.btn,
                customButton: props.customButton
            }
            
        })
        return {text, styleButton}
	}
}
</script>
