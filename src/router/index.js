import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/domEdit',
    component: Layout,
    children: [{
      path: 'domEdit',
      name: 'DomEdit',
      component: () => import('@/views/domEdit/index'),
      meta: { title: 'DomEdit', icon: 'dashboard' }
    }]
  },{
    path: '/computed',
    component: Layout,
    children: [{
      path: 'computed',
      name: 'Computed',
      component: () => import('@/views/computed/index'),
      meta: { title: 'Computed', icon: 'dashboard' }
    }]
  },{
    path: '/animation',
    component: Layout,
    children: [{
      path: 'animation',
      name: 'Animation',
      component: () => import('@/views/animation/index'),
      meta: { title: 'Animation', icon: 'dashboard' }
    }]
  },{
    path: '/lifeCycle',
    component: Layout,
    children: [{
      path: 'lifeCycle',
      name: 'LifeCycle',
      component: () => import('@/views/lifeCycle/index'),
      meta: { title: 'LifeCycle', icon: 'dashboard' }
    }]
  },{
    path: '/components',
    component: Layout,
    children: [{
      path: 'components',
      name: 'Components',
      component: () => import('@/views/components/index'),
      meta: { title: 'Components', icon: 'dashboard' }
    }]
  },{
    path: '/SlotName',
    component: Layout,
    children: [{
      path: 'SlotName',
      name: 'SlotName',
      component: () => import('@/views/SlotName/index'),
      meta: { title: 'SlotName', icon: 'dashboard' }
    }]
  },{
    path: '/contract',
    component: Layout,
    children: [{
      path: 'contract',
      name: 'Contract',
      component: () => import('@/views/contract/index'),
      meta: { title: 'contract', icon: 'dashboard' }
    }]
  },{
    path: '/plugin',
    component: Layout,
    children: [{
      path: 'plugin',
      name: 'Plugin',
      component: () => import('@/views/plugin/index'),
      meta: { title: 'Plugin', icon: 'dashboard' }
    }]
  },{
    path: '/pluginMessage',
    component: Layout,
    children: [{
      path: 'pluginMessage',
      name: 'PluginMessage',
      component: () => import('@/views/pluginMessage/index'),
      meta: { title: 'PluginMessage', icon: 'dashboard' }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
