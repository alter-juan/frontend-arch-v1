import { RouteRecordRaw } from "vue-router";

export enum SURVEYS_ROUTE_NAME {
  HOME = "HomeSurvey",
  MAIN = "SurveysLayout",
}

const routes: RouteRecordRaw = {
  path: "/surveys",
  name: SURVEYS_ROUTE_NAME.MAIN,
  meta: { requiresAuth: false },
  children: [
    {
      path: "",
      name: SURVEYS_ROUTE_NAME.HOME,
      component: () => import("./views/surveys/SurveysView.vue"),
    },
  ],
};

export default routes;
