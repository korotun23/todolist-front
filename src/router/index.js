import { createRouter, createWebHistory } from "vue-router";
import TodoListView from "../views/todoListView.vue";
import AboutView from "../views/aboutView.vue";

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoListView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
