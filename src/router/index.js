import { createRouter, createWebHashHistory } from "vue-router";
import vStartPage from "../views/v-startPage.vue";
import vLogin from "../components/v-login.vue";
import vRegister from "../components/v-register.vue";
import vHome from "../views/v-home.vue";
import firebase from "firebase";


const routes = [
  {
    path: "/",
    name: "Home",
    component: vStartPage,
  },
  {
    path: "/login",
    name: "Login",
    component: vLogin,
  },
  {
    path: "/register",
    name: "Registration",
    component: vRegister,
  },
  {
    path: "/home",
    name: "HomeProfile",
    component: vHome,
    meta: {requiresAuth: true}
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;

