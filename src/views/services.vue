<script setup>
import LsSubintro from "@/components/LsSubintro.vue";
import LsServices from "@/components/landing/Services.vue";
import LsCores from "@/components/services/CoreServices.vue";
import LsJoinus from "@/components/landing/JoinUs.vue";
</script>

<template>
    <main>
        <LsSubintro
            class="hasvideo"
            :videolink="'/media/intro-1.mp4'"
            :title="'Services'"
            :desc="'At Quality Logistics, we specialize in reliable and efficient truck freight solutions across the USA, ensuring timely deliveries, secure transport, and exceptional service tailored to your business needs.'" />
        <LsServices />
        <LsCores />
        <LsJoinus />
    </main>
</template>
