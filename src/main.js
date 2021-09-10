import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from './router/index'
import myInput from '@/views/home/com/myInput.vue'
import myInputEdit from '@/views/home/com/myInputEdit.vue'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueRouter)

Vue.component('MyInput',myInput)
Vue.component('MyInputEdit',myInputEdit)
new Vue({
  render: h => h(App),
  router:VueRouter
}).$mount('#app')
