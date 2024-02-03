import { lazy } from "react";
const LoginSignUp = lazy(() => import("./pages/LoginSignUp"));
const Home = lazy(() => import("./pages/Home"));
const Topic = lazy(() => import("./pages/Topics"));
const NewDevotional = lazy(() => import("./pages/Devotionals/NewDevotional"));
const Devotional = lazy(() => import("./pages/Devotionals"));
import { Layout } from "./components";

export const routes = [
  {
    path: "/",
    component: LoginSignUp,
    private: false,
    layout: null,
  },
  {
    path: "/home",
    component: Home,
    private: true,
    layout: Layout,
  },
  {
    path: "/topic/:slug",
    component: Topic,
    private: true,
    layout: Layout,
  },
  {
    path: "/:slug/devotional",
    component: NewDevotional,
    private: true,
    layout: Layout,
  },
  {
    path: "/:slug/devotional/:devoId",
    component: NewDevotional,
    private: true,
    layout: Layout,
  },
  {
    path: "/:slug/:devoId/",
    component: Devotional,
    private: true,
    layout: Layout,
  },
];
