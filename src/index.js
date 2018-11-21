import install from './install'

install(function (Vue) {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<div><p>{{ message }}</p></div>',
    data () {
      return {
        message: 'Hello world!'
      }
    }
  })
}, window.Vue)
