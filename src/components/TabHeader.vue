<template>
	<header>
		<div class="menuWrap">
			<div>MOVIE APP</div>
    		<router-link to="/search">영화검색</router-link>
		</div>
	</header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
header .menuWrap{display:block; clear:both; content:''; position:absolute; top:20px; right:50px;}
header .menuWrap a{padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>