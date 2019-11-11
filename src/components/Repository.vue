<template>
  <div class="repository__item">
      <h2 class="repository__name">
          {{repo.name}}
      </h2>
    <h3 class="repository__language">
        {{repo.language ? repo.language : 'No language'}}
    </h3>
    <h4 class="repository__description">
        {{repo.description ? repo.description : 'No description'}}
    </h4>
    <div class="repository__anchor">
        <a :href="repo.url" target="_blank">
            <Button text="see more" />
        </a>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Repository',
    props: ['repo'],
    components:{
        Button
    }
}
</script>

<style scoped>
    .repository__item{
        border: 3px solid #F26722;
        border-radius: 8px;
        padding: 15px;
    }
    .repository__name{
        font-size: 21px;
    }
    .repository__language{
        color: #F26722;
        padding: 5px 0;
    }
    .repository__description{
        font-weight: 400;
    }
    .repository__anchor{
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
    }
    .repository__anchor a{
        display: block;
        width: 150px;
    }
    .repository__description,  .repository__name{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>