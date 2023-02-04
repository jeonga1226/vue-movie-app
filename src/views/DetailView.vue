<template>
    <div>
        <!-- <img :src="`https://image.tmdb.org/t/p/w500/${detailInfo.poster_path}`"> -->
        <!-- <video-area></video-area> -->
        <v-playback :url="videoUrl" http-equiv="Content-Security-Policy"></v-playback>
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
import { fetchDetailInfo, corsAnywhere } from '../api/index.js';

export default {
  name: 'detailInfo',
  data: function () {
    return {
      detailInfo: [],
      videoUrl: '',
    }
  },
  created: function () {
    fetchDetailInfo(this.$route.params.id)
    .then((response)=> {
        console.log('### response: ' + JSON.stringify(response));
        this.detailInfo = response.data;
        // this.getYoutubeVideo();
    })
    .catch((error) =>{
        console.log(error);
    })
  },
  methods :{
    getYoutubeVideo() {
      corsAnywhere('https://www.youtube.com/watch?v=3WUw9thZR4k')
      .then((response)=> {
          console.log('### response: ' + JSON.stringify(response));
          // this.detailInfo = response.data;
          // this.getYoutubeVideo();
          this.videoUrl = response.data;
      })
      .catch((error) =>{
          console.log(error);
      })
    }
  }

}
</script>

<style scoped>
  img{
    width: 100%;
    height: 240px;
  }
</style>