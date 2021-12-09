import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import { defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// interface User {
//   id: number;
//   age: number;
//   name: string;
// }

// // 相当于: type OmitUser = { age: number; name: string; }
// type OmitUser = Omit<User, 'id'>;
// @ts-ignore
export interface AppRouterRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouterRecordRaw[]
  props?: Recordable
  fullPath?: string
}
