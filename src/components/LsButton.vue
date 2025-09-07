<script setup>
import {defineProps} from "vue";

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: "default",
    },
    to: {
        type: String,
        default: "#!  ",
    },
    loading: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div
        class="co-button"
        :class="[type, {disabled: disabled}]"
        :to="to"
        :disabled="disabled || loading">
        <slot></slot>
        <div
            v-if="loading"
            class="co-button__loader"></div>
    </div>
</template>
