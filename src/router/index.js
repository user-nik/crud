import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/router.js'
import Event from '../components/Events/router.js'


Vue.use(Router)

const baseRoutes = []
const routes = baseRoutes.concat(Home,Event);
export default new Router({
  routes,
  mode: 'history'
})
