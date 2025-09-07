<!-- components/LsToast.vue -->
<template>
    <div class="ls-toast-container">
        <div
            v-for="toast in toasts"
            class="ls-toast"
            :key="toast.id"
            :class="toast.type">
            {{ toast.message }}
        </div>
    </div>
</template>

<script setup>
import {useToast} from "@/composables/useToast";
const {toasts} = useToast();
</script>
