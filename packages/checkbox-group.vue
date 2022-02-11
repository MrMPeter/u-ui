<!-- 组件说明 -->
<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ICheckboxGroup',
  props: {
    value: Array
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
