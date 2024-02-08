import 'bootstrap/dist/css/bootstrap.min.css'

/* Fontawesome */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'

// dico cosa caricare
library.add(faStar);

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app')
