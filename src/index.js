import install from './install'

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
    render(Vue)
  }

  // @fn render
  function render (Vue) {
    if (!document.querySelector(opt.el)) return
    /* eslint-disable no-new */
    new Vue(opt)
  }
}

export default function (options, Vue) {
  window.widgetByVue = function (el) {
    if (el) options.el = el
    return widgetByVue(options, Vue)
  }
  return window.widgetByVue
}
