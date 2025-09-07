<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {ref, inject, onMounted, onBeforeUnmount} from "vue";
import {Navigation, Pagination, EffectFade, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const amodal = inject("amodal");
const swiperConfig = {
    modules: [Pagination, Navigation, EffectFade, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    pagination: {
        clickable: true,
    },
};
const slides = ref([
    {
        title: "Driven by <span>safety</span>. Powered by <span>experience.</span>",
        description:
            "With years of industry knowledge, we highly prioritize safe, compliant, and efficient freight handling. Our fleet, tech tools, and dedicated drivers set us apart from the rest. When you choose us, you choose confidence in motion.",
        // img: "/images/hero1.png",
    },
    {
        title: "<span>One partner</span> for all your shipping needs",
        description:
            "We simplify logistics by offering full-service freight management under one roof. From dispatch to final delivery, our expert team ensures flawless coordination. Whatever you ship, wherever it goes — we’ve got you fully covered.",
        // img: "/images/hero1.png",
    },
    // {
    //     title: "Reliable freight solutions across every mile",
    //     description:
    //         "From coast to coast, we handle every aspect of freight transportation — safely and on time. Whether it's dry van, reefer, or specialized cargo, we ensure your load moves seamlessly. Trust Quality Logistics to deliver with precision and care, no matter the destination.",
    //     // img: "/images/hero1.png",
    // },
]);
</script>

<template>
    <section class="intro">
        <div class="intro__content">
            <Swiper
                v-bind="swiperConfig"
                class="mySwiper">
                <SwiperSlide
                    v-for="(slide, index) in slides"
                    class="inslide"
                    :key="index">
                    <div class="inslide__content">
                        <video
                            class="inslide__video"
                            :src="`/media/intro-slide-${index + 1}.mp4`"
                            muted
                            loop
                            disablePictureInPicture
                            webkit-playsinline
                            playsinline
                            autoplay></video>

                        <span class="inslide__video-overlay"></span>

                        <div class="inslide__content container">
                            <h2
                                class="inslide__title"
                                v-html="slide.title"></h2>
                            <p class="inslide__desc">{{ slide.description }}</p>
                            <div class="inslide__actions">
                                <LsButton
                                    :to="'#!'"
                                    @click="amodal.openGetQuote()">
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
                    </div>
                </SwiperSlide>
            </Swiper>
            <div class="inslide__navigation">
                <div class="inslide__navigation-prev custom-prev">
                    <img
                        src="/icons/icon-arrow.svg"
                        alt="arrow" />
                </div>
                <div class="inslide__navigation-next custom-next">
                    <img
                        src="/icons/icon-arrow.svg"
                        alt="arrow" />
                </div>
            </div>
        </div>
    </section>
</template>
