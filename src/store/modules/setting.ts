//layout setting repository
import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //control the folding property of menu
      refresh: false, //control refresh
    }
  },
})
export default useLayoutSettingStore
