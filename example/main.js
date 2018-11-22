import Vue from 'vue'
import widgetByVue from '../src'
import test from './components/test'

widgetByVue(test)

window.widgetByVue('#widget', Vue)
