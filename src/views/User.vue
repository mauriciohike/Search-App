<template>
    <Container>
        <UserHeader/>
        <RepositoriesList/>
    </Container>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Container from '../components/Container.vue';
import UserHeader from '../components/UserHeader.vue';
import RepositoriesList from '../components/RepositoriesList.vue';

export default {
    name: 'User',
    components:{
        Container,
        UserHeader,
        RepositoriesList
    },
    methods:{
        ...mapActions(["setRepos"])
    },
    computed: {
        ...mapState(["user", "repositories"]),
        user(){
            return this.$route.params.user
        }
    },
    created(){
        this.setRepos(this.$route.params.user)
    }
}
</script>

<style>

</style>