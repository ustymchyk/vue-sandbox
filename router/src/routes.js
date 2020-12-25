import Home from './components/Home.vue';
import Page from './components/Page.vue';
import NotFound from './components/NotFound.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/page',
    component: Page,
  },
  {
    path: 'default',
    component: NotFound,
  },
];
