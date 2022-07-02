import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { BootstrapVue, IconsPlugin, FormSelectPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import vSelect from 'vue-select'
import VueSweetalert2 from 'vue-sweetalert2';
import { ValidationProvider } from 'vee-validate';
import router from './router'
import PortalVue from 'portal-vue'



// Estilos CSS de las dependencias
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-select/dist/vue-select.css';
import "/src/@fake-db/db";
// Registrar componentes globales 
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('v-select', vSelect)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(FormSelectPlugin)
Vue.use(VueSweetalert2);
Vue.use(PortalVue)



new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
