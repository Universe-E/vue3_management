<template>
  <svg :style="{ width, height }">
    <!--xlink:href执行用哪一个图标，属性值为图标名称-->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
//接收父组件传递过来的参数
defineProps({
  //prefix of xlink-href property
  prefix: {
    type: String,
    default: '#icon-',
  },
  //name of icon
  name: String,
  //color of icon
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
