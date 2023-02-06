<template>
    <div class="home-section">
        <tab-header></tab-header>
        <daily-list></daily-list>
        <weekly-list></weekly-list>
        <romance-list></romance-list>
    </div>
</template>
  
<script>
import TabHeader from '../components/TabHeader.vue'
import RomanceList from '../components/home/RomanceList.vue'
import DailyList from '../components/home/DailyList.vue'
import WeeklyList from '../components/home/WeeklyList.vue'

export default {
    components: {
      TabHeader,
      DailyList,
      WeeklyList,
      RomanceList,
    },
    created() {
        console.log("this.$logoFlag     >   ", this.$logoFlag );
        this.$logoFlag = true;
        console.log("this.$logoFlag     >   ", this.$logoFlag );
    }
}
</script>
  
<style>
  .home-section h3{
      padding-left: 10px;
      text-align: left;
  }
  .home-section .swiper.line{
      /* min-height : 250px; */
      padding-left: 0 20 10 20;
      /* padding-right: 20px; */
  }
  .home-section .swiper .normal-img{
      width: 150px;
      height: 180px;
  }
  .home-section .swiper .post{
      min-width: 150px;
  }
</style>
  