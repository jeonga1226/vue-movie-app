<template>
	<header>
		<div class="menuWrap">
			<div class="logo">
				<img src="../assets/img/icon-wavve.png">
			</div>
    		<!-- <router-link to="/search">영화검색</router-link> -->
		</div>
	</header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
/* header{width:100%; text-align:center; position:fixed; height:120px; border-bottom:1px solid #35495e} */
header{
	width:100%; 
	position:fixed; 
	height: 74px;
	z-index: 999;
}
header .menuWrap{
	display:block; 
	clear:both; 
	content:''; 
	position:relative; 
	top:10px; 
	margin:0 15px;
}
header .logo{
	display: inline-block;
	text-decoration:none;
	color:#333;
	line-height: 55px;
}
header .menuWrap a{
	padding:10px 20px; 
	list-style:none;
	position: absolute;
    right: -4px;
}
header img{
	width:110px;
}
</style>