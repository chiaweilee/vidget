## Vidget
---

<a href="https://npmcharts.com/compare/vidget?minimal=true"><img src="https://img.shields.io/npm/dm/vidget.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vidget"><img src="https://img.shields.io/npm/v/vidget.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vidget"><img src="https://img.shields.io/npm/l/vidget.svg" alt="License"></a>

### Demo

*Demo code see* [@chiaweilee/vidget-demo](https://github.com/chiaweilee/vidget-demo)

### Install

```
npm install vidget
```

*in package.json*

```json
{
    "scripts": {
        "build:widget": "vidget-cli --entry src/main.js --output dist/widget.js"
    }
}
```

### Usage

#### Build Widget

##### Single component

```JavaScript
import Vue from 'vue'
import buildWidget from 'vidget'
buildWidget({
    template: '<template>{{ Math.random() }}</template>'
}, Vue)
```

##### Use *.vue

```vue.js
// test.vue
<template>
    {{ Math.random() }}
</template>
```

```JavaScript
import Vue from 'vue'
import buildWidget from 'vidget'
import test from './test.vue'

buildWidget(test, Vue)
```

##### Use mixin

```JavaScript
const i18n = new VueI18n({
  locale: 'en',
  messages: {}
})

buildWidget(test, Vue, {
    // mixin
    i18n
})
```

##### Cli

*package.json*

```json
{
    "scripts": {
        "build": "vidget-cli build --entry src/main.js --output dist/widget.js"
    }
}
```

```
npm run build
```

##### Demo

```JavaScript
import Vue from 'vue'
import buildWidget from 'vidget'
import test from './components/test'

buildWidget(test)
```

#### Widget Init

```html
<div id="widget"></div>
<script src="http://www.xxx.com/widget.js"></script>
<script>
window.vidget('#widget', {
    // options
    // get props.options at root component
})
</script>
```
