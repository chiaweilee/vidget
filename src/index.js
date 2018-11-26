import { assert } from './utils/warn'
import { clone } from './utils/clone'
// import setupListennerss from './utils/setupListennerss'

let widget

const vidget = function (component = {}, Vue, options = {}) {
  assert(typeof Vue === 'function', 'require Vue')
  assert(typeof Vue === 'function' && Vue.version && /^2\.\d+\.\d+$/.test(Vue.version), `require version 2.x of Vue, but ${Vue.version} was found.`)
  assert(typeof component === 'object' && !(component instanceof Array), 'component must be an object')
  assert(typeof options === 'object' && !(options instanceof Array), 'options must be an object')
  assert(!component.props || !(component.props && component.props.options), '\'props.options\' is reserved on root component, avoid to use it')

  widget = new Vue(Object.assign({
    el: '#widget'
  }, Object.assign(component, {
    props: {
      options: {
        type: Object,
        default: () => options
      }
    }
  })))

  // setupListennerss(function () {
  //   console.log(this)
  //   console.log(arguments)
  // })
}

export default function (comp, Vue) {
  const init = function (el, options) {
    // must use clone to avoid
    // component been destroyed
    // when re-init
    const component = clone(comp)
    if (el) component.el = el
    return vidget(component, Vue, options)
  }

  init.$destroy = function () {
    if (widget) {
      widget.$destroy()
      widget.$el.parentNode.removeChild(widget.$el)
      widget = null
    }
  }

  window.vidget = init.$init = init
  return init
}
