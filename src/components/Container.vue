<template>
    <div class="container flex">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Container'
}
</script>

<style scoped>
    .container{
        width: 95%;
        max-width: 740px;
        margin: 0 auto;
    }
</style>