<script setup>
import {ref, nextTick, watch, onMounted} from "vue";
import {useRoute} from "vue-router";
import {createModal} from "@/composables/useGetQuoteModal";

import LsHeader from "@/components/layout/Header.vue";
import LsFooter from "@/components/layout/Footer.vue";
import LsLoader from "@/components/LsLoader.vue";
import LsFollowbtn from "@/components/LsFollowbtn.vue";

const modal = createModal();
const isLoaded = ref(false);
const route = useRoute();

onMounted(async () => {
    await nextTick();

    window.addEventListener("load", () => {
        setTimeout(() => {
            isLoaded.value = true;
        }, 300);
    });
});

watch(route, (to, from) => {
    isLoaded.value = false;
    setTimeout(() => {
        isLoaded.value = true;
    }, 400);
});
</script>

<template>
    <div class="layout-default">
        <LsHeader />
        <slot></slot>
        <LsFooter />
        <LsLoader :class="{none: isLoaded}" />
        <LsGetquote />
        <LsFollowbtn />
        <LsApply />
    </div>
</template>

<style>
.layout-default {
    overflow: hidden;
}
</style>
