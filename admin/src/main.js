import Vue from 'vue'
import VueRouter from 'vue-router';
import Routers from './router'
import Vuex from 'vuex';
import Util from './libs/util'
import App from './app.vue';
import store from './vuex'
import {sync} from 'vuex-router-sync'
import VueLocalStorage from 'vue-ls';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style/admin.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
Vue.use(mavonEditor);

Vue.use(VueLocalStorage, {
  namespace: 'boblog-'
});

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers,
  scrollBehavior(to, from, savedPosition) {
    // savedPosition 会在你使用浏览器前进或后退按钮时候生效
    // 这个跟你使用 router.go() 或 router.back() 效果一致
    // 这也是为什么我在 tab 栏结构中放入了一个 点击回退 的按钮
    if (savedPosition) {
      return savedPosition
    } else {
      // 如果不是通过上述行为切换组件，就会让页面回到顶部
      return {x: 0, y: 0}
    }
  }
};

const router = new VueRouter(RouterConfig);


router.beforeEach(async (to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title)

  let token = Vue.ls.get("token");
  if (token) {
    store.dispatch('admin/auth').then(() => {
      next()

    }).catch(err => {
      Vue.prototype.$Message.error(err.data.msg || '权限未授权')
      setTimeout(() => {
        next('/login')
      }, 1500);
    })

  } else {
    // 判断是否需要登录
    if (!!to.meta.noAuth) {
      next()

    } else {
      Vue.prototype.$Message.error('权限未授权')
      setTimeout(() => {
        next('/login')
      }, 1500)
    }
  }
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
