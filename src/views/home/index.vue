<template>
  <el-card>
    <div class="box">
      <img :src="useStore.avatar" alt="" class="avatar" />
      <div class="bottom">
        <h3 class="title">Good {{ getTime() }}, {{ useStore.username }}</h3>
        <p class="subtitle">Uranus Management</p>
      </div>
    </div>
  </el-card>
  <div class="bottoms">
    <svg-icon name="welcome" width="600px" height="300px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { getTime } from '@/utils/time'
//引入用户相关的仓库,获取当前用户的头像、昵称
import useUserStore from '@/store/modules/user'
//获取存储用户信息的仓库对象
let useStore = useUserStore()
</script>

<style scoped lang="scss">
.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

    .title {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
    }

    .subtitle {
      font-style: italic;
      color: skyblue;
    }
  }
}
.bottoms {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
