<script setup>
import {ref, onMounted} from "vue";

import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, EffectFade, Autoplay} from "swiper/modules";
import "swiper/css";

const swiperConfig = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
};

const comments = ref([
    {
        id: 1,
        name: "— Sarah L.",
        position: "Logistics Director at Pacific Goods",
        image: "/images/testimonial-1.jpg",
        comment: "Quality Logistics has been a game changer for our logistics. Reliable, responsive, and always on time — exactly what we needed.”",
    },
    {
        id: 2,
        name: "— Daniel K.",
        position: "COO at Urban Traders Inc.",
        image: "/images/testimonial-2.jpg",
        comment: "Their customer service is unmatched. Every load we’ve shipped with them arrived on time and in perfect condition.",
    },
    {
        id: 3,
        name: "— Amanda R.",
        position: "Founder of EcoSupply Co.",
        image: "/images/testimonial-3.jpg",
        comment: "As a growing e-commerce brand, having a dependable freight partner is critical. Quality Logistics delivers excellence at every step.",
    },
    {
        id: 4,
        name: "— Kevin M.",
        position: "Manager at Horizon Textiles",
        image: "/images/testimonial-4.jpg",
        comment: "We switched to Quality Logistics after repeated delays with our last provider — and we’ve never looked back. Excellent service and great communication.",
    },
    {
        id: 5,
        name: "— Luis G.",
        position: "Coordinator at CoreEquip LLC",
        image: "/images/testimonial-5.jpg",
        comment: "Our freight needs are complex, but Quality Logistics handles them flawlessly. I can always count on their team to deliver.",
    },
]);

const shuffled = ref([]);

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

onMounted(() => {
    const numbers = Array.from({length: 24}, (_, i) => i + 1);
    shuffled.value = shuffle(numbers);
});
</script>

<template>
    <section class="comments">
        <div class="container comments__container">
            <div class="comments__header">
                <h2
                    v-if="$route.name === 'about'"
                    class="comments__title">
                    What they say
                </h2>
                <h2
                    v-else
                    class="comments__title">
                    Every Client Matters to Us
                </h2>
                <p class="comments__description">We take pride in building lasting partnerships. Your success is our mission — and our service reflects that commitment.</p>
            </div>

            <Swiper
                class="comments__slider"
                v-bind="swiperConfig">
                <SwiperSlide
                    v-for="comment in comments"
                    :key="comment.id"
                    class="comments__slide">
                    <img
                        class="comments__stars"
                        src="/icons/stars.svg"
                        alt="" />
                    <p>{{ comment.comment }}</p>
                    <div class="comments__author">
                        <img
                            :src="comment.image"
                            alt="" />
                        <div class="comments__author-info">
                            <h3>{{ comment.name }}</h3>
                            <p>{{ comment.position }}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="cm-marquee__wrapper">
            <div class="cm-marquee__list">
                <div
                    v-for="n in shuffled.slice(0, 12)"
                    :data-key="n"
                    :key="'set1-' + n"
                    class="cm-marquee">
                    <img
                        :src="`/images/partner-${n}.png`"
                        :alt="`Partner ${n}`"
                        class="logo" />
                </div>
                <div
                    v-for="n in shuffled.slice(0, 12)"
                    :data-key="n"
                    :key="'set1-' + n"
                    class="cm-marquee">
                    <img
                        :src="`/images/partner-${n}.png`"
                        :alt="`Partner ${n}`"
                        class="logo" />
                </div>
            </div>
        </div>
        <div class="cm-marquee__wrapper">
            <div class="cm-marquee__list reverse">
                <div
                    v-for="n in shuffled.slice(12)"
                    :data-key="n"
                    :key="'set1-' + n"
                    class="cm-marquee">
                    <img
                        :src="`/images/partner-${n}.png`"
                        :alt="`Partner ${n}`"
                        class="logo" />
                </div>
                <div
                    v-for="n in shuffled.slice(12)"
                    :data-key="n"
                    :key="'set1-' + n"
                    class="cm-marquee">
                    <img
                        :src="`/images/partner-${n}.png`"
                        :alt="`Partner ${n}`"
                        class="logo" />
                </div>
            </div>
        </div>
    </section>
</template>
