import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Update from "./components/Update.vue";
import Add from "./components/Add.vue";
import LoginPage from "./components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
