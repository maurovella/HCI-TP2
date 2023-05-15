import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from "./router";
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import {createPinia} from "pinia";

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives
})

app.use(router)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')
