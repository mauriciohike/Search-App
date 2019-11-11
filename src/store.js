import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        repositories: null
    },
    mutations: {
        SET_USER(state, payload){
            state.user = payload;
        },
        SET_REPOS(state, payload){
            state.repositories = payload;
        }
    },
    actions: {
        setUser(context, payload){
            fetch(`https://api.github.com/users/${payload}`)
            .then(res => res.json())
            .then(resJson =>{
                resJson && context.commit('SET_USER', resJson)
            })
        },
        setRepos(context, payload){
            fetch(`https://api.github.com/users/${payload}/repos`)
            .then(res => res.json())
            .then(resJson =>{
                resJson && context.commit('SET_REPOS', resJson)
            })
        }
    }
});