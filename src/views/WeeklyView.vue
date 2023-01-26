<template>
    <div>
        <h2>Weekly View</h2>
        <ul class="top-swiper-list">
            <li v-for="weeklyItem in weeklyList" class="" v-bind:key="weeklyItem.item">
                <img :src="`https://image.tmdb.org/t/p/w500/${weeklyItem.poster_path}`">
                
                <router-link v-bind:to="`detail/${weeklyItem.id}`"><p>{{ weeklyItem.title || weeklyItem.name }}</p></router-link>
                <br />
            </li>
        </ul>
    </div>
</template>
  
<script>
import { fetchWeeklyList } from '../api/index.js';

export default {
  name: 'weeklyList',
  data: function () {
    return {
      weeklyList: []
    }
  },
  created: function () {
    fetchWeeklyList()
    .then((response)=> {
        console.log('### response: ' + JSON.stringify(response));
        this.weeklyList = response.data.results;
    })
    .catch((error) =>{
        console.log(error);
    })
  },

}
</script>
  
<style>
  img{
    width: 100px;
    height: 120px;
  }
</style>
  