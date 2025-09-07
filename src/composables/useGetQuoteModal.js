import {ref, provide} from "vue";

export function createModal() {
    const openedModal = ref(null);
    const openGetQuote = () => (openedModal.value = "getquote");
    const openApply = () => (openedModal.value = "apply");
    const closeModal = () => (openedModal.value = null);

    provide("amodal", {openedModal, openGetQuote, openApply, closeModal});

    return {openedModal, openGetQuote, openApply, closeModal};
}
