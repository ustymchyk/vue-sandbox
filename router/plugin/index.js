import Router from './MyRouter.vue';
import { push } from './history';

export default {
  install(app, options) {
    app.component('router', Router);

    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$pushRoute = push;
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$routes = options.routes;
  },
};
