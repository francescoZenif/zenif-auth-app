import {createRouter, createWebHistory} from "vue-router";

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

router.beforeEach(async (to, from, next) => {
  // Ensure user data is fetched before proceeding with auth checks

  if (to.meta.requiresAuth) {
    next({name: "Welcome"});
  } else {
    next();
  }
});
export default router;
