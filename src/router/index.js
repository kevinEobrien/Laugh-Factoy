import Vue from "vue";
import Router from "vue-router";
import LaughList from "@/components/LaughList";
import AddComment from "@/components/AddComment";
import SubmitLaugh from "@/components/SubmitLaugh";
import Comments from "@/components/Comments";
import TopLaughs from "@/components/TopLaughs";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/laughlist",
      name: "LaughList",
      component: LaughList
    },
    {
      path: "/toplaughs",
      name: "TopLaughs",
      component: TopLaughs
    },
    {
      path: "/addComment",
      name: "AddComment",
      component: AddComment
    },
    {
      path: "/comments",
      name: "Comments",
      component: Comments
    },
    {
      path: "/submitlaugh",
      name: "SubmitLaugh",
      component: SubmitLaugh
    }
  ],
});
