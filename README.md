### Usage

#### Single component

```JavaScript
widgetsByVue({
    el: '#custom-widget',
    template: '<template>{{ Math.random() }}</template>'
})
```

#### Use widget-router

```JavaScript
widgetsByVue({
    el: '#custom-widget',
    routes: [ ... ]
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
// test.el = '#custom-widget' // optional
widgetsByVue(test)
```
