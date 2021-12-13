import type { AppRouterRecordRaw } from '@/router/types'
import { PageEnum } from '@/enums/pageEnum'

export const RootRoute: AppRouterRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
}

export const LoginRoute: AppRouterRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/Login.vue'),
  meta: {
    title: '登录',
  },
}

export const HomeRoute: AppRouterRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/dashborad/Home/index.vue'),
  meta: {
    title: '首页',
  },
}

export const basicRoutes = [RootRoute, LoginRoute, HomeRoute]
