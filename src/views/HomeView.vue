<template>
    <div>
        <daily-view></daily-view>
        <weekly-view></weekly-view>
    </div>
</template>
  
<script>
import DailyView from './DailyView.vue'
import WeeklyView from './WeeklyView.vue'

export default {
  components: {
    DailyView,
    WeeklyView,
  }
}
</script>
  
<style>

</style>
  