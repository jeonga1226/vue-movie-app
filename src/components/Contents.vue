<template>
  <div>

    
  </div>
</template>

<script>
export default {
    methods:{
        getList() {
            this.$axios.get("http://localhost:3000/api/board")
            .then((res)=>{
              console.log(res);
            })
            .then((err)=>{
              console.log(err);
            })
        }
    }
}

</script>

<style scoped>
  
</style>