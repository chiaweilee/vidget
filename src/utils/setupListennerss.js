import { assert } from './warn'
import { supportsPushState } from './push-state'

export default callback => {
  assert(typeof callback === 'function', 'callback must be a function')

  window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', callback)
}
