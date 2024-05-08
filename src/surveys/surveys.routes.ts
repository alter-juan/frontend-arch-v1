import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "/surveys",
  name: "SurveysLayout",
  meta: { requiresAuth: false },
  children: [
    {
      path: "",
      name: "HomeSurvey",
      component: () => import("./views/surveys/SurveysView.vue"),
    },
  ],
};

export default routes;
