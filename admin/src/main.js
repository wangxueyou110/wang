import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import { routes } from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store';
import NProgress from 'vue-nprogress'
import VueQuillEditor from 'vue-quill-editor'

Vue.use(require('vue-moment'));

Vue.use(VueQuillEditor)

Vue.use(NProgress)

const nprogress = new NProgress()

Vue.use(VueAxios, axios)
Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

Vue.use(iView);

new Vue({
    el: '#app',
    nprogress,
    router,
    store,
    render: h => h(App)
})