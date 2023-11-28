<template>
  <el-icon style="margin-right: 20px" @click="changeIcon">
    <!--control the icon change-->
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <!--left breadcrumb-->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>Authenticator</el-breadcrumb-item>
    <el-breadcrumb-item>User</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting.ts'
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
