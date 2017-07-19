import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        datalist:[]
    },
    mutations:{
         getData(){
            this.axios.get('http://10.31.160.28:3000/users').then((response) => {
                    console.log(response.data);
                return  state.datalist=response.data
                })
            }
    },
    actions:{
        getData({commit}){
            commit('getData')
        }
    }
})
