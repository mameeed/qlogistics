<template>
    <label class="ql-input__wrapper">
        <span class="ql-input__label ql-textarea">{{ placeholder }}</span>
        <textarea
            v-model="inputVal"
            ref="el"
            class="ql-input ql-textarea"
            @blur="handleBlur"
            :class="inputClass"
            placeholder=" "></textarea>
    </label>
</template>

<script setup>
import {computed, defineModel} from "vue";
import {useIMask} from "vue-imask";
import {useAttrs, defineProps, defineEmits} from "vue";

const inputVal = defineModel();

const props = defineProps({
    inputClass: {
        type: [String, Array, Object],
        default: "",
    },
    handleBlur: {
        type: Function,
        default: () => {},
    },
    mask: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "text",
    },
    name: {
        type: String,
        default: "",
    },
});

const {el, masked} = useIMask({
    mask: props.mask || "",
    radix: ".",
});

const emit = defineEmits(["update:modelValue"]);
</script>
