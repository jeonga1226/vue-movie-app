<template>
  <div>
    <swiper class="swiper h500" :options="swiperOption">
        <swiper-slide v-for="listItem in getList" class="post" v-bind:key="listItem.item">
            <router-link v-bind:to="`detail/${listItem.id}`">
                <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`">
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
                    // slidesPerView: 4, 
                    spaceBetween: 20, 
                    loop: true, 
                    // navigation: { 
                    //     nextEl: '.swiper-button-next', 
                    //     prevEl: '.swiper-button-prev' 
                    // },
                    pagination: { 
                        el: '.swiper-pagination', 
                    }, 
                },
                list : []
            }
        },
        created() {
            this.$store.dispatch("FETCH_DAILY");
        },
        computed : {
            getList(){
                let result;
                result = this.$store.state.dailys.results;
                console.log("result            ",  result);
                return result;
            }
            
        }
    }
</script>

<style scoped>
    h3{
        padding-left: 10px;
        text-align: left;
    }
    /* .swiper{
        min-height : 350px;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    img.large-img{
        width: 200px !important;
        height: 240px !important;
    }
    .post{
        min-width: 210px;
    } */
    .swiper-pagination{
        text-align: left !important;
        padding-left : 10px;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom : 60px !important;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom : 60px !important;
    }
    .swiper-pagination-bullet {background : #eee }
    .swiper-pagination-bullet-active { background: #fff; }
    .h500{
        height : 500px; 
    }
    img{
        width: 100%;
        height: 500px;
        object-fit: cover;
        -webkit-mask-image: linear-gradient(to top, transparent 8%, black 100%);
    }

</style>