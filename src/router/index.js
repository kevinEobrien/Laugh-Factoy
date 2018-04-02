import Vue from 'vue';
import Router from 'vue-router';
import LaughList from '@/components/LaughList';
import AddComment from '@/components/AddComment';
import SubmitLaugh from '@/components/SubmitLaugh';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/laughlist',
      name: 'LaughList',
      component: LaughList
    },
    {
      path: '/addComment',
      name: 'AddComment',
      component: AddComment
    },
    {
      path: '/submitlaugh',
      name: 'SubmitLaugh',
      component: SubmitLaugh
    }
  ],
});
