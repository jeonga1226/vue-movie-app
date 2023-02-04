<template>
    <div>
      <h3>다이나믹한 액션   </h3>
      <swiper class="swiper line" :options="swiperOption">
        <swiper-slide v-for="listItem in getList" class="post" v-bind:key="listItem.item">
          <router-link v-bind:to="`detail/${listItem.id}`">
              <img class="normal-img" :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`">
          
          </router-link>
        </swiper-slide>
  
        <div class="swiper-pagination" slot="pagination"></div>
  
      </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";

    export default {
        name: "slider",
        components:	{
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4, 
                    spaceBetween: 5, 
                    loop: true, 
                    navigation: { 
                        nextEl: '.swiper-button-next', 
                        prevEl: '.swiper-button-prev' 
                    } 
                },
                list : []
            }
        },
        created() {
            this.$store.dispatch("FETCH_POPULAR");
        },
        computed : {
            getList(){
                let result;
                let poplrList = [];
                poplrList = this.$store.state.populars.results || [];
                result = poplrList.filter(item => {
                    return item.genre_ids.includes(28)   // 액션
                });
                return result;
            }
            
        }
    }
</script>

<style>

</style>
    