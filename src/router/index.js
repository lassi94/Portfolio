import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PortfolioOne from '@/components/PortfolioOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio-one',
      name: 'PortfolioOne',
      component: PortfolioOne
    }
  ]
})
