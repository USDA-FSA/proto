import { createApp } from 'vue'
import { router } from './_router/routes';
import App from './App.vue'

// Import FSA Style here to allow for font, image, and CSS assets
import { fsaModal } from 'fsa-style';

const app = createApp(App);

app.use(router);
app.use(fsaModal);

app.mount('#app');
