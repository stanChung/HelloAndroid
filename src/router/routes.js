
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'Home', component: () => import('pages/Home.vue') },
      { path: 'RegisterMember', component: () => import('pages/RegisterMember.vue') },
      { path: 'MyWeather', component: () => import('pages/MyWeather.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
