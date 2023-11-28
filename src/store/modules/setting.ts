//layout setting repository
import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //control the folding property of menu
    }
  },
})
export default useLayoutSettingStore
