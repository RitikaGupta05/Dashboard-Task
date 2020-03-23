import Vue from "vue";
import Router from "vue-router";
import home from "./views/home";

Vue.use(Router);

const router = new Router({
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: "home",
        component: home
    },
    ]
})

export default router