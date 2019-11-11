<template>
    <div class="header">
        <div class="picture">
            <div class="picture-img">
                <img :src="user.avatar_url" alt="User Avatar">
            </div>
            <div class="picture-text">
                <p>{{user.login}}</p>
            </div>
        </div>
        <div class="information">
            <h2 class="title">
                {{user.name}}
            </h2>
            <p class="location">
                {{user.location}}
            </p>
            <p class="description">
                {{user.bio}}
            </p>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'UserHeader',
    computed: {
        ...mapState(["user"])
    }
}
</script>

<style>
    .header{
        display: flex;
        padding: 20px 10px;
        color: #040408;
        border-bottom: 15px solid #F26722;
    }
    .picture{
        display: flex;
        flex-direction: column;
    }
    .picture-img{
        width: 230px;
        height: auto;
    }
    .picture-img img{
        border-radius: 8px;
    }
    .picture-text{
        font-weight: 700;
        margin-top: 10px;
        font-size: 18px;
    }
    .information{
        padding: 20px 0 0 15px;
    }
    .title{
        font-size: 36px;
    }
    .location{
        padding: 5px 0;
        font-size: 21px;
    }

    @media (max-width: 992px){
        .information{
            display: none;
        }
        .picture{
            margin: 0 auto;
            align-items: center
        }
        .picture-text{
            font-size: 21px;
        }
    }
</style>