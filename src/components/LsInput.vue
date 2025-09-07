<template>
    <label class="ql-input__wrapper">
        <span class="ql-input__label">{{ placeholder }}</span>
        <input
            v-model="inputVal"
            ref="el"
            class="ql-input"
            placeholder=" "
            @blur="handleBlur"
            :class="inputClass"
            :type="type" />
    </label>
</template>

<script setup>
import {computed} from "vue";
import {useIMask} from "vue-imask";
import {useAttrs, defineProps, defineEmits, defineModel} from "vue";

const inputVal = defineModel();

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: "",
    },
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

const modelValue = computed({
    get: () => props.modelValue,
    set: (val) => emit("update:modelValue", val),
});

const updateValue = (event) => {
    modelValue.value = event.target.value;
};
</script>
