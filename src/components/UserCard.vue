<template>
    <div class="user__card">
        <div class="card__header">
            <div class="header__avatar">
                <img :src="user.avatar_url" alt="User Avatar">
            </div>
            <div class="header__login">
                <p>{{user.login}}</p>
            </div>
        </div>
        <div class="card__body">
            <div class="body__inside">
                <div class="inside__info">
                    <div class="info">
                        <span class="info__num">
                            {{ user.followers }}
                        </span>
                        <span class="info__text">
                            {{ user.followers == 1 ? 'follower' : 'followers' }}
                        </span>
                    </div>
                    <div class="info">
                        <span class="info__num">
                            {{ user.public_repos }}
                        </span>
                        <span class="info__text">
                            {{ user.repositories == 1 ? 'repository' : 'repositories' }}
                        </span>
                    </div>
                </div>
                <div class="inside__button">
                    <router-link :to="{ name: 'user', params: {user: user.login } }">
                        <Button text="see more" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Button from './Button.vue';

export default {
    name: 'UserCard',
    components:{
        Button
    },
    computed: {
        ...mapState(["user"])
    }
}
</script>

<style>
    .user__card{
        width: 270px;
        background: #F26722;
        border: 4px solid #F26722;
        border-radius: 8px;
        margin: 40px auto 0 auto;
    }
    .card__header{
        width: 150px;
        margin: 0 auto;
        padding: 15px 0;
    }
    .header__avatar img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 0 auto;
    }
    .header__login{
        margin-top: 5px;
        text-align: center;
        color: #FDFAF8;
        font-weight: 700;
        font-size: 18px;
    }
    .card__body{
        background: #FDFAF8;
        padding: 15px 0;
        border-radius: 0 0 8px 8px;
    }
    .body__inside{
        width: 150px;
        margin: 0 auto;
    }
    .inside__info{
        padding: 10px 5px;
    }
    .info{
        color: #272730;
        font-weight: 700;
        display: flex;
        align-items: center;
    }
    .info__num{
        font-size: 24px;
        margin-right: 5px;
    }
</style>