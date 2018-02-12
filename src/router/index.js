import Vue from 'vue';
import Router from 'vue-router';
import LaughList from '@/components/LaughList';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '@/components/LaughList',
      name: 'LaughList',
      component: LaughList
    },
  ],
});
