import { createApp } from 'vue';
//import VS2 from 'vue-script2';
import App from '@/_App.vue';

const app = createApp(App);

//app.use(VS2);

import { store } from '@/_store.js';
app.use(store);

import { router } from '@/_router.js';
app.use(router);

// Import FSA Style here to allow for font, image, and CSS assets
import 'fsa-style';
// uncomment below if importing individual components
//import { fsaModal } from 'fsa-style';
//app.use(fsaModal);

app.mount('#app');
