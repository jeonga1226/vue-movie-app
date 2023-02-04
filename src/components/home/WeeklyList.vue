<template>
  <div>
    <h3>주간 인기 콘텐츠</h3>
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
            this.$store.dispatch("FETCH_WEEKLY");
        },
        computed : {
            getList(){
                let result;
                result = this.$store.state.weeklys.results;
                return result;
            }
            
        }
    }
</script>

<style>
    /* h3{
        padding-left: 10px;
        text-align: left;
    }
    .swiper.line{
        padding-left: 0 20 10 20;
    }
    .swiper .normal-img{
        width: 150px;
        height: 180px;
    }
    .swiper .post{
        min-width: 150px;
    } 
    */
</style>
  