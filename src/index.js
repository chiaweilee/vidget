import install from './install'
import router from './router'
import { supportsPushState } from './router/utils'
import test from './test.vue'

window.widgetsByVue = function (options = {}, Vue) {
  Vue = Vue || window.Vue

  // options
  if (typeof options !== 'object' && !(options instanceof Array)) {
    return
  }

  const opt = Object.assign({
    el: '#widget'
  }, options)

  // install, then init
  install(init, Vue)

  // @fn init
  function init (Vue) {
    Vue.use(router)

    if (document.querySelector(opt.el)) {
      render(Vue)
    }

    if (Vue && '$router' in Vue.prototype && '$route' in Vue.prototype) {
      // has Vue-router
    } else {
      window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
        // try re-render
        render(Vue)
      })
    }
  }

  // @fn render
  function render (Vue) {
    /* eslint-disable no-new */
    const widget = opt.routes instanceof Array
      // router mode
      ? {
        template: '<widget-router-view/>',
        data () {
          return {
            routes: opt.routes
          }
        }
      }
      // component mode
      : opt
    new Vue(widget).$mount(opt.el)
  }
}

test.el = '#widget'

window.widgetsByVue(test)
