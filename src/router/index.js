import {createRouter, createWebHistory} from "vue-router";
import {isLoggedIn} from "@/services/auth.js";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("@/views/Welcome.vue"),
    meta: {requiresAuth: false},
  },

  {
    path: "/terms-and-conditions",
    name: "T&Cs",
    component: () => import("@/views/TermsAndCondition.vue"),
    meta: {requiresAuth: false},
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
    meta: {requiresAuth: false},
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: () => import("@/views/auth/ForgotPassword.vue"),
    meta: {requiresAuth: false},
  },
  {
    path: "/reset-password/:token",
    name: "Reset Password",
    component: () => import("@/views/auth/ResetPassword.vue"),
    meta: {requiresAuth: false},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Track if user data has been fetched
let userDataFetched = false;
let userFetchPromise = null;

router.beforeEach(async (to, from, next) => {
  // Ensure user data is fetched before proceeding with auth checks

  if (to.meta.requiresAuth) {
    if (isLoggedIn()) {
      if (!to.meta?.permission_slug) {
        next();
      } else {
        next({name: "not-found-programmatically"});
      }
    } else {
      next({name: "Welcome"});
    }
  } else {
    if (isLoggedIn()) {
      next({name: "Welcome"});
    } else {
      next();
    }
  }
});
export default router;
