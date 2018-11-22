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
