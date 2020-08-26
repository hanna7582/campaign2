import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'campaign',
    component: loadView('Campaign'),
  },
  {
    path: '/campaign/detail/badge',
    name: 'campaignBadge',
    component: loadView('CampaignBadge'),
  },
  {
    path: '/campaign/reward',
    name: 'campaignReward',
    component: loadView('CampaignReward'),
  },
  {
    path: '/campaign/detail',
    name: 'campaignDetail',
    component: loadView('CampaignDetail'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function loadView(view) {
  return () => import (`../views/${view}.vue`);
}

export default router
