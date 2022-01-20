import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
//import VueI18n from 'vue-i18n';
import { createI18n } from 'vue-i18n'
import messages from "./locales/messages"

const i18n = createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})


createApp(App).use(router).use(i18n).mount('#app')
