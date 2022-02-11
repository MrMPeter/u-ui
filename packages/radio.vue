<template>
  <label class="i-radio" :class="{'is-checked': label === model}">
    <!-- 小圆 -->
    <span class="i-radio__input">
      <span class="i-radio__inner"></span>
      <input
        class="i-radio__original"
        type="radio"
        v-model="model"
        :value="label"
        ref="radio"
      >
    </span>
    <span class="i-radio__label">
      <slot></slot>
      <!-- 如果没有插槽，就显示label -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'IRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件给当前组件注册的input事件
        this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 用以判断radio是否被radioGroup所包裹
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss">
.i-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .i-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .i-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .i-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .i-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.i-radio.is-checked {
  .i-radio__input {
    .i-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50% ,-50%) scale(1);
      }
    }
  }
  .i-radio__label {
    color: #409eff;
  }
}
</style>
