import { createApp } from 'vue'
import App from '@/App.vue'
//import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg plugins
import 'virtual:svg-icons-register'
//import all components
import globalComponent from '@/components'
//import global styles
import '@/styles/index.scss'

const app = createApp(App)
app.use(ElementPlus)

app.use(globalComponent)
app.mount('#app')
