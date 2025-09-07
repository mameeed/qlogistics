<!-- components/LsToast.vue -->
<template>
    <a
        href="https://t.me/QualityLogisticsOH"
        target="_blank"
        class="ql-follow"
        :class="{'ql-show': isShown}">
        <img
            class="ql-follow__image"
            src="/icons/telegram.svg"
            alt="contact" />
    </a>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";

const isShown = ref(false);
const handleScroll = () => {
    if (window.pageYOffset > 1000) {
        isShown.value = true;
    } else {
        isShown.value = false;
    }
};

onMounted(() => {
    ["mousewheel", "scroll", "gesturechange"].forEach((evt) => window.addEventListener(evt, handleScroll, false));
    handleScroll();
});

onBeforeUnmount(() => {
    ["mousewheel", "scroll", "gesturechange"].forEach((evt) => window.removeEventListener(evt, handleScroll, false));
});
</script>
