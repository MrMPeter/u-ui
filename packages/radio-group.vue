<!-- 组件说明 -->
<template>
  <div class="i-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IRadioGroup',
  // 父组件provide，子组件inject，这样写可以拿到父组件的value
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // i-radio-group 接收到了value值
    // 将来还需要触发 当前组件的input事件
    // provide 与 inject
    value: null
  }
}
</script>

<style lang='scss' scoped>
</style>
