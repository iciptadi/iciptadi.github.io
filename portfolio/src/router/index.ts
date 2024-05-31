import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectsDetailView from "../views/ProjectsDetailView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    //   meta: {
    //     title: 'About',
    //   },
    // },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/projects/:id",
      name: "projects-detail",
      component: ProjectsDetailView,
      meta: {
        title: "Projects Detail",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact",
      },
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: NotFoundView,
      meta: {
        title: "Not Found",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || "Default Title"; // Set the document title based on the route's meta.title
  next();
});

export default router;
