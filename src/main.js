import { createApp } from 'vue'
import App from './App.vue'

// Import FSA Style here to allow for font, image, and CSS assets
import { FSAModal } from 'fsa-style';

console.log('FSAModal', FSAModal)

const app = createApp(App);
app.use(FSAModal);
app.mount('#app');
