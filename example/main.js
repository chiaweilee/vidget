import Vue from 'vue'
import buildWidget from '../src'
import test from './components/test'

buildWidget(test, Vue)

window.vidget('#widget', {
  appid: 12345667890
})
