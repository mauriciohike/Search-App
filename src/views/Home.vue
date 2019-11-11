<template>
    <Container>

        <h1 class="home__title">
            Find the information that you need ;)
        </h1>

        <div class="input-group">
            <input type="text" v-model="name" placeholder="Type the github user!"/>
        </div>

        <div class="users">
            <UserCard v-if="user && !user.message" :user="user"/>
            <h2 class="not-found" v-if="user && user.message">
                User not found!
            </h2>
        </div>
    </Container>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Container from '../components/Container.vue';
import UserCard from '../components/UserCard.vue';

export default {
    name: 'Home',
    components: {
        Container,
        UserCard
    },
    data(){
        return{
            name: ''
        }
    },
    methods:{
        ...mapActions(["setUser"])
    },
    computed: {
        ...mapState(["user"])
    },
    watch:{
        name(){
            this.setUser(this.name)
        }
    }
}
</script>

<style scoped>
    .home__title{
        font-weight: 700;
        font-size: 48px;
        padding: 40px 0;
        color: #272730;
    }
    .input-group, .input-group input{
        width: 100%
    }
    .input-group input{
        padding: 12px;
        border-radius: 8px;
        border: 4px solid #D4C2B6;
        font-size: 18px;
        color: #272730;
    }
    .not-found{
        text-align: center;
        color: #D4C2B6;
        padding: 40px 0;
        font-size: 32px;
    }
    @media (max-width: 768px){
        .home__title{
            font-size: 36px;
        }
        .input-group input{
            padding: 8px;
        }
    }
</style>