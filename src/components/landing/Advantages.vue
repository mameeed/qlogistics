<script setup>
const advantages = [
    {
        title: "1. Safety",
        description: "Our commitment to safety ensures your freight is transported with the utmost care. We follow FMCSA standards, use real-time monitoring, and train our drivers to handle every load responsibly.",
        icon: "/icons/adv-icon1.svg",
    },
    {
        title: "2. Full-Service",
        description: "From first mile to last, we manage every part of the logistics process. You get dispatch, compliance, permits, and delivery — all handled in-house for seamless service.",
        icon: "/icons/adv-icon2.svg",
    },
    {
        title: "3. Nationwide Reach",
        description: "We serve clients across all 48 continental states with speed and consistency. No matter how remote or complex your route, we’ll get your freight there on time.",
        icon: "/icons/adv-icon3.svg",
    },
    {
        title: "4. On-Time Delivery",
        description: "Delays cost money — we don’t let that happen. Our smart routing, tracking systems, and proactive dispatching keep your freight on schedule, every time.",
        icon: "/icons/adv-icon4.svg",
    },
    {
        title: "5. Transparency",
        description: "We believe in full visibility at every stage. Track your loads, access digital logs, and stay informed with real-time updates — no surprises, ever.",
        icon: "/icons/adv-icon5.svg",
    },
    {
        title: "6. Experienced Team",
        description: "Our team brings years of logistics, compliance, and driver support experience. We solve problems before they arise and treat every load like it’s our own.",
        icon: "/icons/adv-icon6.svg",
    },
    {
        title: "7. Scalable Solutions",
        description: "Whether you're shipping one load or managing an entire fleet, we scale to your needs. From startups to enterprise carriers, we adapt fast to help you grow.",
        icon: "/icons/adv-icon7.svg",
    },
    {
        title: "8. Tech-Driven",
        description: "We use the latest logistics tech for tracking, route planning, and documentation. That means faster responses, lower costs, and fewer errors — all in your favor.",
        icon: "/icons/adv-icon1.svg",
    },
];
</script>

<template>
    <section class="advantages">
        <div class="container advantages__container">
            <div class="advantages__header">
                <h2 class="advantages__title">Why сhoose Quality Logistics</h2>
                <p class="advantages__description">Reliable. Safe. Built for your freight success.</p>
            </div>

            <div class="advantages__list">
                <div
                    v-for="(advantage, index) in advantages"
                    class="advantages__item"
                    :key="index">
                    <img
                        class="advantages__icon"
                        :alt="`advantage ${index + 1}`"
                        :src="advantage.icon" />
                    <h3 class="advantages__item-title">{{ advantage.title }}</h3>
                    <p class="advantages__item-description">
                        {{ advantage.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
