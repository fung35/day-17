import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import App from './App.vue'
import store from './vuex/store.js'
Vue.use(Vuex);

new Vue({
    store,
    template: '<App/>',
    components: { App },
    render: h => h(App)

}).$mount("#app")
