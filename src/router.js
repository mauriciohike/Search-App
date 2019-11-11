import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from './views/Home.vue';
import User from './views/User.vue';

export default new Router({
    mode: "history", 
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/", 
            name: "home", 
            component: Home
        },
        {
            path: "/:user", 
            name: "user", 
            component: User
        }
    ]
});