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
        "build:widget": "vidget --entry src/main.js --output dist/widget.js"
    }
}
```

```JavaScript
// src/main.js
// import Vue from 'vue'
import buildWidget from 'vidget'
import test from './components/test'

buildWidget(test)
```

```html
<div id="widget"></div>
<script src="http://www.xxx.com/widget.js"></script>
<script>
window.vidget('#widget')
</script>
```
