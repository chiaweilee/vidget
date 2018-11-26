import Vue from 'vue'
import buildWidget from '../src'
import test from './components/test'

buildWidget(test, Vue)

// window.vidget('#widget', {
//   appid: 12345667890
// })

setInterval(() => {
  console.log('$init')
  window.vidget.$init()
  console.log('$destroy')
  window.vidget.$destroy()
  const widget = document.createElement('div')
  widget.id = 'widget'
  document.body.appendChild(widget)
}, 1000)
