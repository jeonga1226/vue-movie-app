<template>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w500/${detailInfo.poster_path}`">
        <p>영화명 : {{detailInfo.title}}</p>
        <p>영화명(오리진) : {{detailInfo.original_title}}</p>
        <p>내용 : {{detailInfo.overview}}</p>
        <ul>
            <li v-for="company in detailInfo.production_companies" class="no" v-bind:key="company.item">
                <p>영화사 : {{company.name}}</p>
            </li>
        </ul>
        
        
    </div>
</template>
    
<script>
import { fetchDetailInfo } from '../api/index.js';

export default {
  name: 'detailInfo',
  data: function () {
    return {
      detailInfo: []
    }
  },
  created: function () {
    fetchDetailInfo(this.$route.params.id)
    .then((response)=> {
        console.log('### response: ' + JSON.stringify(response));
        this.detailInfo = response.data;
    })
    .catch((error) =>{
        console.log(error);
    })
  },

}
</script>

<style scoped>
  img{
    width: 240px;
    height: 240px;
  }
</style>