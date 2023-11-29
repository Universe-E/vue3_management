<template>
  <el-icon style="margin-right: 20px" @click="changeIcon">
    <!--control the icon change-->
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <!--left breadcrumb-->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting.ts'

let $route = useRoute()

//define a variable to control the icon change
let layoutSettingStore = useLayoutSettingStore()
const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
