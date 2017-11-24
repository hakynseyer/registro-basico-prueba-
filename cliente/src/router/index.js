import Vue from 'vue'
import Router from 'vue-router'

import registroA from '@/pages/registroA'
import estados from '@/pages/estados'
import municipios from '@/pages/municipios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Registro',
      component: registroA
    },
    {
      path: '/estados',
      name: 'estados',
      component: estados
    },
    {
      path: '/municipios',
      name: 'municipios',
      component: municipios
    }
  ]
})
