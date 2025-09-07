import {defineStore} from "pinia";

import {ref} from "vue";

export const useTrackingStore = defineStore("tracking", () => {
    const trackingData = ref({});
    const isLoading = ref(false);

    return {trackingData, isLoading};
});
