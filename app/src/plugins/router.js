import path from 'path'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import ChallengeSession from "../views/ChallengeSession.vue";
import UserChallenges from "../views/UserChallenges.vue"; // Import UserChallenges view

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/challenges",
    name: "challenges",
    component: UserChallenges,
  },
  {
    path: "/challenge/:id",
    name: "challenge-session",
    component: ChallengeSession,
    props: true,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;