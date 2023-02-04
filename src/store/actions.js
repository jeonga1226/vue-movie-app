import { fetchDailyAllList, fetchWeeklyList, fetchSearchMovieInfo, fetchPopularList } from '../api/index.js';

export default {
    FETCH_DAILY({ commit }) {
        fetchDailyAllList() 
        .then(({ data, status }) => {
            console.log(status);
            commit('SET_DAILY', data);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_WEEKLY({ commit }) {
        fetchWeeklyList() 
        .then(({ data, status }) => {
            console.log(status);
            commit('SET_WEEKLY', data);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_SEARCH({ commit }, str) {
        fetchSearchMovieInfo(str)
        .then(({ data, status }) => {
            console.log(status);
            console.log(data);
            commit('SET_SEARCH', data);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_POPULAR({ commit }, str) {
        fetchPopularList(str)
        .then(({ data, status }) => {
            console.log(status);
            console.log(data);
            commit('SET_POPULAR', data);
        })
        .catch(function(error){
            console.log(error);
        })
    },
}