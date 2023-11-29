<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!--render layout sub routes-->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting.ts'

let layoutSettingStore = useLayoutSettingStore()

//control mount and unmount component
let flag = ref(true)

//monitor refresh status, if changed,
watch(
  () => layoutSettingStore.refresh,
  () => {
    flag.value = false
    //do not use setTimeout, because refresh time is uncertain
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
