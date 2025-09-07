<script setup>
import DefaultLayout from "@/layout/default.vue";
import LsToast from "@/components/LsToast.vue";
</script>

<template>
    <DefaultLayout>
        <RouterView />
        <LsToast />
    </DefaultLayout>
</template>
