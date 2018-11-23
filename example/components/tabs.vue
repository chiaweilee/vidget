<template>
  <van-tabs v-model="active">
    <van-tab title="Tab 1">Content 1</van-tab>
    <van-tab title="Tab 2">Content 2</van-tab>
    <van-tab title="Tab 3">Content 3</van-tab>
    <van-tab title="Tab 4">Content 4</van-tab>
  </van-tabs>
</template>

<script>
import Tab from 'vant/es/tab'
import 'vant/es/tab/index.css'
import Tabs from 'vant/es/tabs'
import 'vant/es/tabs/index.css'
export default {
  components: {
    'van-tab': Tab,
    'van-tabs': Tabs
  },
  data () {
    return {
      active: 2
    }
  }
}
</script>
