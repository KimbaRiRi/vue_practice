import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import NProgress from 'nprogress' // <--- include the library
import store from '@/store/store'
import NotFound from './views/NotFound.vue'
import NetworkIssue from './pages/NetworkIssue.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: route => ({
        page: route.params.page,
        perPage: route.params.perPage,
        events: route.params.events,
        eventTotal: route.params.eventTotal
      })
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('event/fetchEvent', routeTo.params.id)
          .then(event => {
            routeTo.params.event = event
            next()
          })
          .catch(() => next({ name: '404', params: { resource: 'event' } }))
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true // I added this so we can receive the param as a prop
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
      // I added this resource param here.
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  // Start the route progress bar.
  NProgress.start()
  next()
})
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
