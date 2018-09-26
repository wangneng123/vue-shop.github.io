import Vue from 'vue'
import Router from 'vue-router'
import Company from '@/components/Company'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Quality from '@/components/Quality'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Company',
      component: Company
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/Quality',
      name: 'Quality',
      component: Quality
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
