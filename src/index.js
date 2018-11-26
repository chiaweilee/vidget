import { assert } from './utils/warn'

const vidget = function (component = {}, Vue, options = {}) {
  assert(typeof Vue === 'function', 'require Vue')
  assert(typeof Vue === 'function' && Vue.version && /^2\.\d+\.\d+$/.test(Vue.version), `require version 2.x of Vue, but ${Vue.version} was found.`)
  assert(typeof component === 'object' && !(component instanceof Array), 'component must be an object')
  assert(typeof options === 'object' && !(options instanceof Array), 'options must be an object')
  assert(!(component.props && component.props.options), '\'props.options\' is reserved on root component, avoid to use it')

  /* eslint-disable no-new */
  new Vue(Object.assign({
    el: '#widget'
  }, Object.assign(component, {
    props: {
      options: {
        type: Object,
        default: () => options
      }
    }
  })))
}

export default function (component, Vue) {
  window.vidget = function (el, options) {
    if (el) component.el = el
    return vidget(component, Vue, options)
  }
  return window.vidget
}
