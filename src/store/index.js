import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex)

// vuex : 컴포넌트 레벨이 복잡해졌을 때 쉽게 관리 할 수 있다. 

export const store = new Vuex.Store({
    state : {
        dailys: [],
        weeklys : [],
        searchs : [],
        populars : [],
    },
    mutations,
    actions,
});