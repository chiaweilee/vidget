### Usage

#### Single component

```JavaScript
widgetsByVue({
    template: '<template>{{ Math.random() }}</template>'
})
```

#### Use *.vue

```vue.js
// test.vue
<template>
    {{ Math.random() }}
</template>
```

```JavaScript
import test from './test.vue'
widgetsByVue(test)
```

#### Demo

*package.json*

```json
{
    "scripts": {
        "build:widget": "vue-widget --entry src/main.js --output dist/widget.js"
    }
}
```

```JavaScript
// src/main.js
// import Vue from 'vue'
import buildWidget from 'vue-widget'
import test from './components/test'

buildWidget(test)

// add below if you wanna a autorun widget
// you can build inner-build 'Vue' by passing 'Vue' with the sencond argv
// if not,
// widgetByVue will auto check window.Vue
// Vue will be auto install though CDN, if not found
// window.widgetByVue('#widget', Vue)
```

```html
<div id="widget"></div>
<script src="http://www.xxx.com/widget.js"></script>
<script>
window.widgetByVue('#widget')
</script>
```
