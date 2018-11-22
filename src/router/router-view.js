export default {
  name: 'WidgetRouterView',
  template: '<component :is="name">',
  props: {
    name: {
      type: String,
      default: null
    }
  }
}
