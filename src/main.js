import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTour from 'vue-tour'
import App from './App.vue'

require('vue-tour/dist/vue-tour.css')

Vue.config.productionTip = false

Vue.use(VueTour);
Vue.use(VueRouter);



new Vue({
    render: h => h(App),
}).$mount('#app')