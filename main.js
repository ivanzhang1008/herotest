import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.serverUrl = "https://127.0.0.1:18080/api";
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
