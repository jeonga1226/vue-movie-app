import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import CategoryView from '../views/CategoryView.vue';
import DetailView from '../views/DetailView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({ // 라우터의 정보들을 관리하는 객체
    mode : 'history',
	routes : [
        {
            path: '/home',	
            component : HomeView,
            name : 'HomeView'
        },
        {
            path: '/search',	
            component : SearchView,
            name : 'SearchView'
        },
        {
            path: '/category',	
            component : CategoryView,
            name : 'CategoryView'
        },
        {
            path: '/detail/:id',	
            component : DetailView,
            name : 'DetailView'
        },
    ]
});
