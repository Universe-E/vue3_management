<template>
  <div>show login success: home</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user.ts'

let userSotre = useUserStore()
onMounted(() => {
  userSotre.userInfo()
})
</script>

<style scoped></style>
