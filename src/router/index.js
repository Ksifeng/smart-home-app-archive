import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'
import Sensors from '../views/Sensors.vue'
import Devices from '../views/Devices.vue'
import Security from '../views/Security.vue'
import History from '../views/History.vue'
import Analytics from '../views/Analytics.vue'
import Settings from '../views/Settings.vue'

const routes = [
  { path: '/', component: Overview },
  { path: '/sensors', component: Sensors },
  { path: '/devices', component: Devices },
  { path: '/security', component: Security },
  { path: '/history', component: History },
  { path: '/analytics', component: Analytics },
  { path: '/settings', component: Settings }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
