<template>
    <button>
        {{text}}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: ["text"]
}
</script>

<style scoped>
    button{
        background: #F26722;
        color: #ffffff;
        font-weight: 700;
        border: none;
        border-radius: 8px;
        padding: 10px 30px;
        display: block;
        width: 100%;
        font-size: 18px;
        cursor: pointer;
        transition: all .3s ease-in;
    }
    button:hover{
        background: #CF4B0A;
    }
</style>