<template>
    <div class="section">
        <div class="search-box">
            <label for="search" type="button" tabindex="0" class="btn-search"></label>
            <input type="text" id="inputValue" name="search" placeholder="제목, 장르, 배우로 찾아보세요" class="search-inpt" v-on:input="getSearchList">
        </div>
        <!-- <input type="text" id="inputValue" placeholder="제목, 장르, 배우로 찾아보세요." v-on:input="getSearchList"> -->
        <!-- <button v-on:click="getSearchList">확인</button> -->
        <div class="scroll-wrap content">
            <div class="tag-box">
                <button class="button button-series">시리즈</button>
                <button class="button button-movie">영화</button>
            </div>
            <div class="tab-box">
                <button v-for="(tab, index) in tabs" :key="tab.item"
                    class="button" v-bind:class="{active: currentTab === index}"
                    v-on:click="tabClick(index)"> {{ tab }}</button>
            </div>
            <div class="trend-wrap">
                <div v-show="currentTab===0">
                    <li v-for="listItem in trendings" :key="listItem.item">
                        <div>
                            <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`" class="lft-img">
                                {{ listItem.name }}                    
                        </div>
                        
                    </li>
                </div>
                <div v-show="currentTab===1">
                    <li v-for="listItem in trendings" :key="listItem.item">
                        <div>
                            <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`" class="lft-img">
                                {{ listItem.title }}                    
                        </div>
                        
                    </li>
                </div>
                <!-- <router-link v-bind:to="`detail/${listItem.id}`">
                    <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`">
                </router-link> -->
            </div>
            
            <div class="search-list-wrap" v-if="searchfinish===true">
                <li v-for="listItem in searchs" :key="listItem.item">
                    <div class="list-item">
                        <img :src="`https://image.tmdb.org/t/p/w500/${listItem.poster_path}`" class="lft-img">
                            {{ listItem.title }}                    
                    </div>
                    
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
    import { fetchSearchMovieInfo, fetchWeekTrendingList } from '../api/index.js';


    export default {
        name: "search",
        data() {
            return {
                trendingList : [],
                tabs : ['인기 시리즈', '인기 영화'],
                currentTab : 0,

                searchfinish: false,        // 검색완료시 true로 바뀌고, 이때부터 표 생성
                searchList : [],
            }
        },
        created() {
            fetchWeekTrendingList("tv")
            .then(({ data }) => {
                this.trendingList = data.results;
            })
            .catch(function(error){
                console.log(error);
            })
        },
        computed : {
            trendings(){
                let result;
                result = this.trendingList;
                console.log("computed trendings!!! ", result);
                return result;
            },
            searchs(){
                let result;
                result = this.searchList;
                console.log("computed searchs!!! ", result);
                return result;
            }
            
        },
        methods : {
            tabClick(idx) {
                this.currentTab = idx;
                this.getTrendingList();
            },
            getTrendingList() {
                let type = (this.currentTab === 0) ? "tv" : "movie";

                fetchWeekTrendingList(type)
                .then(({ data }) => {
                    this.trendingList = data.results;
                })
                .catch(function(error){
                    console.log(error);
                })
            }, 
            getSearchList() {
                let searchStr = document.getElementById('inputValue').value;
                console.log("searchStr   >> ",searchStr);
                if(searchStr.length > 0){       // 입력한 글자가 있을 경우
                    fetchSearchMovieInfo(searchStr)
                    .then(({ data }) => {
                        this.searchfinish = true;
                        this.searchList = data.results;

                        // search-list-wrap 영역 외 숨김
                        document.getElementsByClassName("tag-box")[0].classList.add("none");
                        document.getElementsByClassName("tab-box")[0].classList.add("none");
                        document.getElementsByClassName("trend-wrap")[0].classList.add("none");
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                }else{                          // 입력한 글자가 없을 경우
                    // search-list-wrap 영역 숨김
                    this.searchfinish = false;
                    document.getElementsByClassName("tag-box")[0].classList.remove("none");
                    document.getElementsByClassName("tab-box")[0].classList.remove("none");
                    document.getElementsByClassName("trend-wrap")[0].classList.remove("none");
                }
                
            }, 
        }
    }
</script>
  
<style scoped>
    .section {
        padding : 0px 15px;
        min-height: 600px;
        height:100%;
    }
    .search-box {
        position: fixed;
        background-color : #000;
        z-index: 20;
        width: 90%;
    }
    .search-box .btn-search {
        background-image: url("../assets/img/icon-search.png");
        background-size: 10px auto;
    }
    .search-box input {
        margin-top: 15px;
        height: 35px;
        width: 100%;
        background: transparent;
        border-color : #000;
        border-bottom : 0.2rem solid #fff;
        color: #fff;
    }
    .search-box input::after{
        border-bottom: 0.2rem solid #fff;
    }
    .content {
        padding-top : 60px;
        height : 100%;
        min-height : 600px;
    }
    .trend-wrap {
        padding: 10px 0px;
        font-size : 12px;
    }
    li{
        list-style-type : none;
    }
    .tag-box{
        margin: 10px;
        text-align: center;
    }
    .tag-box button{
        position: relative;
        overflow: hidden;
        height: 40px;
        border-radius: 30px;
        border: 1px solid #717171;
        width: 150px;
        padding-left: 64px;
        font-size: 16px;
        color: #fff;
        text-align: left;
        transition: width .2s ease-in;
        background: transparent;
        margin-left : 10px;
    }
    .tag-box .button:first-child {
        margin-left: 0px;
    }
    .tag-box .button:before {
        position: absolute;
        top: 47%;
        left: 25px;
        width: 22px;
        height: 22px;
        transform: translateY(-50%);
        content: "";
    }
    .tag-box .button.button-series:before{
        background-image: url("../assets/img/icon-tv.png");
        background-size: 22px auto;
    }
    .tag-box .button.button-movie:before{
        background-image: url("../assets/img/icon-film.png");
        background-size: 22px auto;
    }
    .tab-box {
        text-align: center;
    }
    .tab-box .button{
        position: relative;
        overflow: hidden;
        height: 40px;
        width: 150px;
        font-size: 16px;
        color: #fff;
        transition: width .2s ease-in;
        background: transparent;
        border: none;
    }
    .tab-box .button.active::after{
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 60%;
        height: 0.2rem;
        border-bottom: 0.2rem solid #006ecd;
        margin-left: 21px;
    }
    .lft-img{
        width: 90px;
        height: 50px;
        border-radius: 10px;
    }
    .search-list-wrap{
        padding: 10px 15px;
        font-size : 12px;
        position: relative;
    }
    .search-list-wrap .list-item{
        width : 100px;
        margin : 0px 10px 40px 0px;
        position : absolute;
    }
    .search-list-wrap img{
        width: 90px;
        height: 120px;
    }
    
</style>
  