import Vue from 'vue'
import buildWidget from '../src'
import test from './components/test'

buildWidget(test)

window.widgetByVue('#widget', Vue)
