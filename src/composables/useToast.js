// composables/useToast.js
import {ref} from "vue";

const toasts = ref([]);

let id = 0;

export function useToast() {
    const addToast = (message, type = "info", duration = 3000) => {
        const toastId = id++;
        toasts.value.push({id: toastId, message, type});

        setTimeout(() => {
            toasts.value = toasts.value.filter((t) => t.id !== toastId);
        }, duration);
    };

    return {
        toasts,
        addToast,
    };
}
