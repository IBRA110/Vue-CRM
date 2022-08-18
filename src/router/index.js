/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
		meta: {layout: 'main'},
    component: HomeView
  },
	{
		path: '/login',
		name: 'login',
		meta: {layout: 'auth'},
		component: () => import('../views/LoginView.vue')
	},
	{
		path: '/register',
		name: 'register',
		meta: {layout: 'auth'},
		component: () => import('../views/RegisterView.vue')
	},
	{
		path: '/categories',
		name: 'categories',
		meta: {layout: 'main'},
		component: () => import('../views/CategoriesView.vue')
	},
	{
		path: '/detail-record',
		name: 'detail-record',
		meta: {layout: 'main'},
		component: () => import('../views/Detail-recordView.vue')
	},
	{
		path: '/history',
		name: 'history',
		meta: {layout: 'main'},
		component: () => import('../views/HistoryView.vue')
	},
	{
		path: '/planning',
		name: 'planning',
		meta: {layout: 'main'},
		component: () => import('../views/PlanningView.vue')
	},
	{
		path: '/profile',
		name: 'profile',
		meta: {layout: 'main'},
		component: () => import('../views/ProfileView.vue')
	},
	{
		path: '/record',
		name: 'record',
		meta: {layout: 'main'},
		component: () => import('../views/RecordView.vue')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
