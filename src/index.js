import install from './install'
import router from './router'
import { supportsPushState } from './router/utils'

const widgetByVue = function (options = {}, Vue) {
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

    render(Vue)

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
    if (!document.querySelector(opt.el)) return
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
    new Vue(widget)
  }
}

export default function (options, Vue) {
  window.widgetByVue = function (el) {
    if (el) options.el = el
    return widgetByVue(options, Vue)
  }
  return window.widgetByVue
}
