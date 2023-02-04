<template>
	<footer>
		<div class="menuWrap">
			<router-link to="/home">홈</router-link>
    		<router-link to="/category">카테고리</router-link>
			<router-link to="/Search">검색</router-link>
    		<router-link to="/my">MY</router-link>
		</div>
	</footer>
</template>

<script>
export default {
	
}
</script>

<style scoped>
footer{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
footer .menuWrap{display:block; clear:both; content:'';}
footer .menuWrap{position:absolute; top:20px; right:50px;}
footer .menuWrap a{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>