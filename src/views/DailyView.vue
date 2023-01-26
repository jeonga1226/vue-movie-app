<template>
  <div>
    <h2>daily view</h2>
    <ul class="top-swiper-list">
      <swiper-view></swiper-view>
      <li v-for="dailyItem in dailyList" class="" v-bind:key="dailyItem.item">
          <img :src="`https://image.tmdb.org/t/p/w500/${dailyItem.poster_path}`">
          
          <router-link v-bind:to="`detail/${dailyItem.id}`"><p>{{ dailyItem.title || dailyItem.name }}</p></router-link>
          <br />
      </li>
    </ul>
    
  </div>
</template>
  
<script>
import { fetchDailyAllList } from '../api/index.js';
import SwiperView from '../components/Swiper.vue';

export default {
  name: 'dailyList',
  data: function () {
    return {
      dailyList: []
    }
  },
  created: function () {
    fetchDailyAllList()
    .then((response)=> {
        console.log('### response: ' + JSON.stringify(response));
        this.dailyList = response.data.results;
    })
    .catch((error) =>{
        console.log(error);
    })
  },
  components : {
    SwiperView
  }

}
</script>
  
<style scoped>
  img{
    width: 100px;
    height: 120px;
  }
</style>
  