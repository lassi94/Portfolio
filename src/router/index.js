import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PortfolioOne from '@/components/PortfolioOne'
import PortfolioTwo from '@/components/PortfolioTwo'
import About from '@/components/About'

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
    },
    {
      path: '/portfolio-two',
      name: 'PortfolioTwo',
      component: PortfolioTwo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
