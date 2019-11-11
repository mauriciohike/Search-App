<template>
    <div class="repositories__container">
        <h2 class="title">
            Repositories:
        </h2>

        <div class="repositories__list">
            <div class="list__item" v-for="repository in repositories" :key="repository.id">
                <Repository :repo="repository"/>
            </div>
        </div>
    </div>
</template>

<script>

import Repository from './Repository.vue';
import { mapState } from 'vuex';

export default {
    name: 'RepositoriesList',
    components:{
        Repository
    },
    computed: {
        ...mapState(["repositories"])
    }
}
</script>

<style scoped>
    .repositories__container{
        padding: 20px 0;
    }
    .title{
        font-size: 32px;
        margin: 20px 0 10px 0;
    }
    .repositories__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list__item{
        width: 49%;
        min-width: 300px;
        margin: 8px 0;
    }
    @media (max-width: 992px){
        .list__item{
            width: 100%;
        }
    }
</style>