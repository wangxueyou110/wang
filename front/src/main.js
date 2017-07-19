import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import {routes} from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'

Vue.use(VueAxios, axios)
Vue.use(VueRouter);
const router = new VueRouter({
	routes:routes, // 可以直接写成routes
	mode:'history', // mode设置成history，那么地址就可以请求http://localhost:8080/user
	scrollBehavior(to,from,savedPosition){
		if(savedPosition){
			alert(savedPosition);
			return savedPosition;
		}

		if(to.hash){
			return { selector:to.hash };
		}

		return { x: 0 ,y:0 }
		//return { x:0, y:700 };
	}
});

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router, 
  store,
  render: h => h(App)
})
