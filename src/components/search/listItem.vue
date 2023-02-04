<template>
  <div>
    {{ searchs.title }}
  </div>
</template>

<script>
export default {
    props : {
        searchs : {
            type : Object,
            default : () => ({})
        }
    }
}
</script>

<style>

</style>