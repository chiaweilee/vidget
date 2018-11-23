import install from './install'

const vidget = function (options = {}, Vue) {
  Vue = Vue || window.Vue

  // options
  if (typeof options !== 'object' && !(options instanceof Array)) {
    return
  }

  const opt = Object.assign({
    el: '#widget'
  }, options)

  // install, then init
  install(function (Vue) {
    /* eslint-disable no-new */
    new Vue(opt)
  }, Vue)
}

export default function (options, Vue) {
  window.vidget = function (el) {
    if (el) options.el = el
    return vidget(options, Vue)
  }
  return window.vidget
}
