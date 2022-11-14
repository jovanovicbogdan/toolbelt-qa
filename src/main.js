import { createApp } from 'vue';
import App from './App.vue';
import JQuery from 'jquery';

window.$ = JQuery;

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css';

// import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faPenToSquare, faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faPenToSquare, faTrash, faMagnifyingGlass);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');
