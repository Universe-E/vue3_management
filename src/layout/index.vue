<template>
  <div class="layout_container">
    <!--left menu-->
    <div class="layout_slider" :class="{ fold: layoutSettingStore.fold }">
      <Logo></Logo>
      <!--show menu-->
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="layoutSettingStore.fold"
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
          active-text-color="yellowgreen"
        >
          <!--dynamic menu generate from route-->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--tab bar-->
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold }">
      <Tabbar />
    </div>
    <!--contents-->
    <div class="layout_main" :class="{ fold: layoutSettingStore.fold }">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user.ts'
//get route instance
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting.ts'
let userStore = useUserStore()
let $route = useRoute()
let layoutSettingStore = useLayoutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100% - $base-menu-logo-height);
      .el-menu {
        border-right: none; //hide right border
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    background: white;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
