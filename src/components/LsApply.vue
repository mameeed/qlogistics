<script setup>
import {inject, ref, onMounted, onUnmounted, computed} from "vue";
import {applyFroDriver} from "@/services/general.service";
import CompInput from "@/components/LsInput.vue";
import CompRdInput from "@/components/LsRadioInput.vue";
import {useToast} from "@/composables/useToast";

const {addToast} = useToast();

const {openedModal, closeModal} = inject("amodal");
const modalData = ref({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    cdlType: "",
    hazmat: "",
    twic: "",
    eligible: "",
    accidents: "",
    gross: "",
    perMile: "",
});
const handleKeyDown = (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
};

const clearForm = () => {
    modalData.value = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        cdlType: "",
        hazmat: "",
        twic: "",
        eligible: "",
        accidents: "",
        gross: "",
        perMile: "",
    };
};

const isFormValid = computed(() => {
    return (
        modalData.value.firstName.trim().length > 3 &&
        modalData.value.lastName.trim().length > 3 &&
        modalData.value.email.trim().length > 3 &&
        modalData.value.phone.trim().length > 3 &&
        modalData.value.gross.trim().length &&
        modalData.value.perMile.trim().length
    );
});

const isLoading = ref(false);
const submitForm = async () => {
    try {
        isLoading.value = true;
        await applyFroDriver(modalData.value);
        addToast("Application sent successfully!", "success");
        setTimeout(() => {
            clearForm();
            closeModal();
        }, 500);
    } catch (err) {
        console.error(err);
        addToast("Something went wrong!", "error");
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
    <div
        class="qlmodal"
        :class="{opened: openedModal === 'apply'}"
        @click.self="closeModal">
        <div class="qlmodal__holder">
            <div class="qlmodal__header">
                <h3 class="qlmodal__header-title">Join Our Team</h3>
                <p class="qlmodal__header-desc">Please fill in the form below, at Quality logistics, we’re actively hiring motivated and qualified drivers who are passionate about the road and committed to excellence.</p>
                <div
                    @click="closeModal"
                    class="qlmodal__header-button">
                    <img
                        src="/icons/close.svg"
                        alt="document" />
                </div>
            </div>
            <div class="qlmodal__body applyd">
                <div class="applyd__inputs">
                    <CompInput
                        v-model="modalData.firstName"
                        placeholder="First Name *"
                        :inputClass="[{'ql-notfilled': modalData.firstName.trim().length <= 3, 'ql-success': modalData.firstName.trim().length > 3}]"
                        type="text" />
                    <CompInput
                        v-model="modalData.lastName"
                        placeholder="Last Name *"
                        :inputClass="[{'ql-notfilled': modalData.lastName.trim().length <= 3, 'ql-success': modalData.lastName.trim().length > 3}]"
                        type="text" />
                    <CompInput
                        v-model="modalData.email"
                        class="applyd__input"
                        placeholder="Email *"
                        :inputClass="[{'ql-notfilled': modalData.email.trim().length <= 3, 'ql-success': modalData.email.trim().length > 3}]"
                        type="email" />
                    <CompInput
                        v-model="modalData.phone"
                        :inputClass="[{'ql-notfilled': modalData.phone.length <= 3, 'ql-success': modalData.phone.length > 3}]"
                        mask="+{1} (000) 000-00-00"
                        placeholder="Phone *"
                        type="tel" />
                    <CompInput
                        v-model="modalData.dob"
                        class="applyd__input"
                        placeholder="Date of Birth"
                        type="date" />
                    <CompInput
                        v-model="modalData.address"
                        class="applyd__input"
                        placeholder="Address"
                        type="text" />
                    <CompRdInput
                        v-model="modalData.cdlType"
                        class="applyd__input"
                        :label="'CDL License Type (A / B / C)'"
                        :options="[{typea: 'Type A'}, {typeb: 'Type B'}, {typec: 'Type C'}]" />
                    <CompRdInput
                        v-model="modalData.hazmat"
                        class="applyd__input"
                        :label="'Do you have a Hazmat Endorsement? (Yes / No)'"
                        :options="[{yes: 'Yes'}, {no: 'No'}]" />
                    <CompRdInput
                        v-model="modalData.twic"
                        class="applyd__input"
                        :label="'Do you hold a TWIC Card? (Yes / No)'"
                        :options="[{yes: 'Yes'}, {no: 'No'}]" />
                    <CompRdInput
                        v-model="modalData.eligible"
                        class="applyd__input"
                        :label="'Are you legally eligible to work in the U.S.? (Yes / No)'"
                        :options="[{yes: 'Yes'}, {no: 'No'}]" />
                    <CompRdInput
                        v-model="modalData.accidents"
                        class="applyd__input"
                        :label="'Any accidents or violations in the last 5 years? (Yes / No)'"
                        :options="[{yes: 'Yes'}, {no: 'No'}]" />

                    <h2 class="applyd__title">Willing Salary (per mile $? and From Gross %?)</h2>

                    <CompInput
                        v-model="modalData.gross"
                        class="applyd__input"
                        placeholder="From Gross *"
                        :inputClass="[{'ql-notfilled': modalData.gross.length <= 3, 'ql-success': modalData.gross.length > 3}]"
                        type="tel" />
                    <CompInput
                        v-model="modalData.perMile"
                        class="applyd__input"
                        placeholder="Per Mile *"
                        :inputClass="[{'ql-notfilled': modalData.perMile.length <= 3, 'ql-success': modalData.perMile.length > 3}]"
                        type="tel" />
                </div>
            </div>

            <div class="qlmodal__action">
                <LsButton
                    class="gquote__btn"
                    @click="submitForm"
                    :loading="isLoading"
                    :disabled="!isFormValid">
                    Send
                </LsButton>
            </div>
        </div>
    </div>
</template>
