<template>
  <h1>App Root</h1>
  <h1>test svg</h1>
  <!--test svg-->
  <svg-icon name="home" color="pink" width="100px" height="100px"></svg-icon>
  <Pagination></Pagination>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import request from '@/utils/request.ts'

onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss"></style>
