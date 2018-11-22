import Vue from 'vue'
import widgetByVue from '../src'
import test from './components/test'

widgetByVue(test)

console.log(Vue)

window.widgetByVue('#widget', Vue)
