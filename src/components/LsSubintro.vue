<template>
    <section class="ql-subintro">
        <video
            class="ql-subintro__video"
            :src="videolink"
            muted
            loop
            disablePictureInPicture
            webkit-playsinline
            playsinline
            autoplay></video>

        <div class="ql-subintro__content container">
            <div class="ql-subintro__info">
                <h1 class="ql-subintro__title">{{ title }}</h1>
                <p class="ql-subintro__desc">{{ desc }}</p>
                <div class="ql-subintro__actions">
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
    </section>
</template>

<script setup>
import {defineProps, inject} from "vue";

const amodal = inject("amodal");
const props = defineProps({
    title: {
        type: String,
        default: "Route Title",
    },
    desc: {
        type: String,
        default: "Lorem ipsum dolor sit amet",
    },
    videolink: {
        type: String,
        default: "/media/tracking-new.mp4",
    },
    title: {
        type: String,
        default: "",
    },
});
</script>
