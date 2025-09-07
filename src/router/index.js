import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/index.vue";
import AboutView from "@/views/about.vue";
import ServicesView from "@/views/services.vue";
import TrackingView from "@/views/tracking.vue";
import BlogView from "@/views/blog.vue";
import ContactView from "@/views/contact.vue";
import ApplytView from "@/views/applytodrive.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/services",
            name: "services",
            component: ServicesView,
        },
        {
            path: "/tracking",
            name: "tracking",
            component: TrackingView,
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogView,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactView,
        },
        {
            path: "/apply",
            name: "apply",
            component: ApplytView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0};
    },
});

export default router;
