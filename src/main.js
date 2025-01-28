import './assets/main.css'
import '@fontsource/montserrat/400.css'; // Regular
import '@fontsource/montserrat/700.css'; // Bold
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
