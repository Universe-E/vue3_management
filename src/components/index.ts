import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//export all components
const allGlobalComponents = { SvgIcon, Pagination }
export default {
  //method name must be "install"
  install(app) {
    Object.keys(allGlobalComponents).forEach((key) => {
      //apply all component
      app.component(key, allGlobalComponents[key])
    })
    //apply all icons provided by element-plus
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
