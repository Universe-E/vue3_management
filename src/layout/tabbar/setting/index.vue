<template>
  <el-button size="small" icon="Refresh" circle></el-button>
  <el-button size="small" icon="FullScreen" circle></el-button>
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

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped></style>
