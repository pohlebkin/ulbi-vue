import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import commons from '@/components/common'

const app = createApp(App)

commons.forEach((component) => {
    app.component(component.name, component)
})

app.mount('#app')
