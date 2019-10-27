import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import NewAd from '@/components/NewEvent.vue'
import MyEvents from '@/components/MyEvents.vue'
import Event from '@/components/Events/Event.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/new-event',
      name: 'newevent',
      component: NewAd
    },
    {
      path: '/my-events',
      name: 'myevents',
      component: MyEvents
    },
    {
      props: true,
      path: '/event/:id/:path',
      name: 'eventdetails',
      component: Event
    },
    //{ path: "*", component: PageNotFound }
  ],
  mode: 'history'
})