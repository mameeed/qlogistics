<script setup>
import {ref, onMounted, onUnmounted, inject, nextTick} from "vue";
import {gsap} from "gsap";

const amodal = inject("amodal");
const stats = ref([
    {
        title: "Total Loads Successfully Delivered Across the Country",
        value: 0,
        target: 10220,
        prefix: "+",
        icon: "/icons/box-tick.svg",
    },
    {
        title: "Nationwide Freight Transportation Services Covering 48 States",
        value: 0,
        target: 48,
        prefix: "",
        icon: "/icons/map.svg",
    },
    {
        title: "Total miles driver by our reliable fleet",
        value: 0,
        target: 4648142,
        prefix: "+",
        icon: "/icons/routing.svg",
    },
    {
        title: "Real-Time Load Tracking and Live Customer Support",
        value: 0,
        target: 24,
        prefix: "/7",
        icon: "/icons/24-support.svg",
    },
    {
        title: "Years of Proven Experience Handling Diverse Freight Operations",
        value: 0,
        target: 5,
        prefix: "+",
        icon: "/icons/timer.svg",
    },
    {
        title: "Compliance With All FMCSA Safety Regulations",
        value: 0,
        target: 100,
        prefix: "%",
        icon: "/icons/courthouse.svg",
    },
]);

const contacts = ref(null);
let observer = null;

const animateAllNumbers = () => {
    stats.value.forEach((item) => {
        gsap.to(item, {
            duration: 4,
            value: item.target,
            roundProps: "value",
            ease: "power2.out",
        });
    });
};

const onIntersect = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target === contacts.value) {
                animateAllNumbers();
            }
        }
    });
};

const formatNumber = (num) => {
    return num.toLocaleString("ru-RU"); // e.g., 10,000
};

onMounted(() => {
    observer = new IntersectionObserver(onIntersect, {
        root: null,
        threshold: 0.5,
    });

    if (contacts.value) {
        observer.observe(contacts.value);
    }
});

onUnmounted(() => {
    if (observer && contacts.value) {
        observer.unobserve(contacts.value);
    }
});
</script>

<template>
    <section class="stats">
        <div class="stats__titling container">
            <h1 class="stats__title">Quality Logistics in numbers</h1>
            <p class="stats__desc">Our numbers speak for themselves — consistent, reliable, and built on trust.</p>
        </div>

        <div class="stats__content container">
            <div
                ref="contacts"
                class="stats__list">
                <div
                    v-for="item in stats"
                    :key="item"
                    class="statcard">
                    <img
                        class="statcard__icon"
                        :src="item.icon"
                        alt="icon" />
                    <h3 class="statcard__count">
                        <span>{{ formatNumber(item.value) }}{{ item.prefix }}</span>
                    </h3>
                    <h4 class="statcard__title">{{ item.title }}</h4>
                </div>
            </div>
            <div class="stats__interactive">
                <img
                    src="/images/truck_repair.jpg"
                    alt="image"
                    class="stats__image" />
                <img
                    src="/images/truck_travel.jpg"
                    alt="image"
                    class="stats__image" />
                <img
                    src="/images/truck_driver.jpg"
                    alt="image"
                    class="stats__image" />
            </div>
        </div>

        <div class="stats__contact">
            <h2 class="stats__contact-title">Interested in Our Achievements?</h2>
            <p class="stats__contact-desc">Let’s discuss how we can support your logistics needs. Partner with professionals who make freight flow simple and efficient.</p>
            <div class="stats__contact-actions">
                <LsButton
                    :to="'#!'"
                    @click="amodal.openGetQuote()"
                    type="inverse">
                    Get a quote
                </LsButton>
                <LsButton
                    :to="'#!'"
                    @click="amodal.openApply()"
                    type="inverse">
                    Apply to drive
                </LsButton>
            </div>
        </div>
    </section>
</template>
