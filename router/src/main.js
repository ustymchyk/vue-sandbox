import { createApp } from 'vue';
import MyRouter from '../plugin/index';

import App from './App.vue';
import routes from './routes';

createApp(App)
  .use(MyRouter, {
    routes,
  })
  .mount('#app');
