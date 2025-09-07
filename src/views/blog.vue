<script setup>
import LsSubintro from "@/components/LsSubintro.vue";
import LsBlog from "@/components/landing/Blog.vue";
import LsJoinus from "@/components/landing/JoinUs.vue";
</script>

<template>
    <main>
        <LsSubintro
            class="hasvideo"
            videolink="/media/intro-2.mp4"
            :title="'Our blog'"
            :desc="'Stay updated with the latest industry news, logistics trends, and expert tips to optimize your shipping and improve supply chain efficiency.'" />
        <LsBlog />
        <LsJoinus />
    </main>
</template>
