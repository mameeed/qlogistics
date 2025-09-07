<template>
    <div class="ql-rdinput__wrapper">
        <p class="ql-rdinput__label">{{ label }}</p>
        <div class="ql-rdinput__inputs">
            <label
                v-for="(option, index) in options"
                :key="'opt' + index"
                class="ql-rdinput">
                <input
                    v-model="modelValue"
                    class="ql-rdinput__input"
                    type="radio"
                    :class="inputClass"
                    :name="groupName"
                    :value="getKey(option)"
                    :checked="modelValue === option" />
                {{ getValue(option) }}
            </label>
        </div>
    </div>
</template>

<script setup>
import {defineProps, defineEmits, defineModel} from "vue";

const modelValue = defineModel();

const props = defineProps({
    options: {
        type: [Array, Object],
        default: [{opt1: "Опция 1"}, {opt2: "Опция 2"}, {opt3: "Опция 3"}],
    },
    label: {
        type: [String],
        default: "Radio input label:",
    },
    inputClass: {
        type: [String, Array, Object],
        default: "",
    },
    inputUniqueName: {
        type: [String],
    },
});
const groupName = props.inputUniqueName || `radio-${Math.random().toString(36).substr(2, 9)}`;
const getKey = (option) => Object.keys(option)[0];
const getValue = (option) => Object.values(option)[0];
</script>
