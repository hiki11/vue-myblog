import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})

/*解决重复跳转错误*/
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
