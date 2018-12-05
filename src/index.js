import { assert } from './utils/warn'
import { clone } from './utils/clone'

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

  const observer = new MutationObserver(([ e ]) => {
    const { removedNodes } = e
    if (removedNodes.length) {
      removedNodes.forEach(node => {
        if (node === widget.$el) {
          // $el removed
          if (!widget._isDestroyed) {
            // not destroyed, destroy it
            widget.$destroy()
            widget = widget.$el = null
            observer.disconnect()
          }
        }
      })
    }
  })
  observer.observe(widget.$el.parentNode, {
    childList: true
  })
}

export default function (comp, Vue, mixin = {}) {
  const init = function (el, options) {
    // must use clone to avoid
    // component been destroyed
    // when re-init
    const component = clone(comp)
    if (el) component.el = el
    // mixin
    Object.keys(mixin).forEach(_ => {
      component[_] = mixin[_]
    })
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
