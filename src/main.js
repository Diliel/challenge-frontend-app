import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'
import { BootstrapVue, IconsPlugin, FormSelectPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import vSelect from 'vue-select'
import VueSweetalert2 from 'vue-sweetalert2';
import { ValidationProvider } from 'vee-validate';

// Estilos CSS de las dependencias
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';


// Registrar componentes globales 
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('v-select', vSelect)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(FormSelectPlugin)
Vue.use(VueSweetalert2);



new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
