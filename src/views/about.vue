<script setup>
import LsSubintro from "@/components/LsSubintro.vue";
import LsWhoWeAre from "@/components/landing/WhoWeAre.vue";
import LsStata from "@/components/landing/Stata.vue";
import LsQuote from "@/components/about/Quote.vue";
import LsMission from "@/components/about/Mission.vue";
import LsVision from "@/components/about/Vision.vue";
import LsComments from "@/components/landing/Comments.vue";
import LsJoinUs from "@/components/landing/JoinUs.vue";
</script>

<template>
    <main>
        <LsSubintro
            class="hasvideo"
            :videolink="'/media/intro-slide-1.mp4'"
            :title="'About us'"
            :desc="'We are a dedicated team committed to providing innovative, high-quality solutions tailored to meet your unique needs, driven by integrity, creativity, and a passion for excellence.'" />
        <LsQuote />
        <LsWhoWeAre />
        <LsStata class="ql-about" />
        <LsMission />
        <LsVision />
        <LsComments class="ql-comments" />
        <LsJoinUs class="ql-comments" />
    </main>
</template>
