<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <!--user avatar-->
  <img
    src="public/logo.png"
    style="height: 24px; width: 24px; margin-left: 20px"
  />
  <!--dropdown menu-->
  <el-dropdown>
    <span class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Exit</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting.ts'

let layoutSettingStore = useLayoutSettingStore()
//change status when clicking refresh button
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
//full screen
const fullScreen = () => {
  //judge full screen status true/false
  let full = document.fullscreenElement
  if (!full) {
    //full screen
    document.documentElement.requestFullscreen()
  } else {
    //exit full screen
    document.exitFullscreen()
  }
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped></style>
