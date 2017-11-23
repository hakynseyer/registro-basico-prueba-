import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import registroA from '@/pages/registroA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Registro A',
      component: registroA
    }
  ]
})
