import Vue from 'vue'
import App from './App.vue'
import vueResources from 'vue-resource'


Vue.use(vueResources)

new Vue({
  el: '#app',
  render: h => h(App)
})
