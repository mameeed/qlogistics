<script setup>
import {inject, ref, onMounted, onUnmounted, computed} from "vue";
import {postGetQuote} from "@/services/general.service";
import CompInput from "@/components/LsInput.vue";
import CompTextarea from "@/components/LsTextarea.vue";
import {useToast} from "@/composables/useToast";

const {addToast} = useToast();

const {openedModal, closeModal} = inject("amodal");

const isLoading = ref(false);

const modalData = ref({
    name: "",
    phone: "",
    email: "",
    message: "",
    company: "",
    fromAddress: "",
    toAddress: "",
    shippingDate: "",
    deliveryDate: "",
});

const clearForm = () => {
    modalData.value = {
        name: "",
        phone: "",
        email: "",
        message: "",
        company: "",
        fromAddress: "",
        toAddress: "",
        shippingDate: "",
        deliveryDate: "",
    };
};
const handleKeyDown = (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
};
onMounted(() => {
    window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
});

const isFieldsValid = computed(() => {
    return modalData.value.name.trim().length > 3 && modalData.value.phone && modalData.value.email.trim().length > 3;
});

const submitForm = async () => {
    isLoading.value = true;
    try {
        const response = await postGetQuote(modalData.value);
        addToast("Quote sent successfully!", "success");
        setTimeout(() => {
            closeModal();
            clearForm();
        }, 500);
    } catch (err) {
        console.error(err);
        addToast("Something went wrong!", "error");
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div
        class="qlmodal"
        :class="{opened: openedModal === 'getquote'}"
        @click.self="closeModal">
        <div class="qlmodal__holder">
            <div class="qlmodal__header">
                <h3 class="qlmodal__header-title">Get a quote</h3>
                <p class="qlmodal__header-desc">Complete our simple form to get a custom quote tailored to your shipment. Discover how cost-effective and efficient our logistics solutions truly are.</p>
                <div
                    @click="closeModal"
                    class="qlmodal__header-button">
                    <img
                        src="/icons/close.svg"
                        alt="document" />
                </div>
            </div>
            <div class="qlmodal__body getquote">
                <CompInput
                    v-model="modalData.name"
                    placeholder="Name *"
                    type="tel"
                    :inputClass="[{'ql-notfilled': modalData.name.trim().length <= 3, 'ql-success': modalData.name.trim().length > 3}]" />
                <CompInput
                    v-model="modalData.phone"
                    mask="+{1} (000) 000-00-00"
                    placeholder="Phone *"
                    type="tel"
                    :inputClass="[{'ql-notfilled': modalData.phone.length <= 3, 'ql-success': modalData.phone.length > 3}]" />
                <CompInput
                    v-model="modalData.email"
                    class="gquote__input"
                    placeholder="Email *"
                    type="tel"
                    :inputClass="[{'ql-notfilled': modalData.email.trim().length <= 3, 'ql-success': modalData.email.trim().length > 3}]" />
                <CompInput
                    v-model="modalData.company"
                    class="gquote__input"
                    placeholder="Company name"
                    :inputClass="[{'ql-notfilled': modalData.company.trim().length, 'ql-success': modalData.company.trim().length}]"
                    type="tel" />
                <CompInput
                    v-model="modalData.fromAddress"
                    class="gquote__input"
                    placeholder="Ship FROM address"
                    :inputClass="[{'ql-success': modalData.fromAddress.trim().length}]"
                    type="" />
                <CompInput
                    v-model="modalData.toAddress"
                    class="gquote__input"
                    placeholder="Ship TO address"
                    :inputClass="[{'ql-success': modalData.toAddress.trim().length}]"
                    type="" />
                <CompInput
                    v-model="modalData.shippingDate"
                    class="gquote__input"
                    placeholder="Desired shipping date"
                    :inputClass="[{'ql-success': modalData.shippingDate.trim().length}]"
                    type="date" />
                <CompInput
                    v-model="modalData.deliveryDate"
                    class="gquote__input"
                    placeholder="Desired delivery date"
                    :inputClass="[{'ql-success': modalData.deliveryDate.trim().length}]"
                    type="date" />
                <CompTextarea
                    v-model="modalData.message"
                    class="gquote__input"
                    placeholder="Details and additional info"
                    :inputClass="[{'ql-success': modalData.message.trim().length}]"
                    type="tel" />

                <LsButton
                    class="gquote__btn"
                    @click="submitForm"
                    :loading="isLoading"
                    :disabled="!isFieldsValid">
                    Send
                </LsButton>
            </div>
        </div>
    </div>
</template>
