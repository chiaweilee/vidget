import routerView from './router-view'
import routerLink from './router-link'

export default {
  install (Vue) {
    Vue.component('WidgetRouterView', routerView)
    Vue.component('WidgetRouterLink', routerLink)
  }
}
