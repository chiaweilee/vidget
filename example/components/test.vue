<template>
  <div class="widget">
    <tabs/>
  </div>
</template>

<script>
import tabs from './tabs'
export default {
  components: {
    tabs
  }
}
</script>

<style>
.widget {
  width: 400px;
  height: 300px;
  background-color: #ccc;
}
</style>
