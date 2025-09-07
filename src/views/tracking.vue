<script setup>
import {ref, computed} from "vue";
import {storeToRefs} from "pinia";
import {useTrackingStore} from "@/stores/tracking";
import {getTruckByVIN} from "@/services/tracking.service";

import LsSubintro from "@/components/LsSubintro.vue";
import LsJoinUs from "@/components/landing/JoinUs.vue";
import LsInput from "@/components/LsInput.vue";

const {trackingData, isLoading} = storeToRefs(useTrackingStore());
const vin = ref("");
const error = ref(null);

const search = async () => {
    error.value = null;
    isLoading.value = true;
    try {
        const response = await getTruckByVIN(vin.value);
        if (response.data === "Vehicle with such VIN was nout found") {
            error.value = response.data;
            trackingData.value = null;
            alert("Vehicle with such VIN was nout found");
        }
        trackingData.value = response.data;
    } catch (err) {
        error.value = "Vehicle not found or server error.";
        alert("Vehicle not found or server error.");
    } finally {
        isLoading.value = false;
    }
};

const location = computed(() => trackingData.value?.vehicleLocation?.vehicles?.[0]?.vehicle?.current_location || {});
const driver = computed(() => trackingData.value?.vehicleData?.permanent_driver || {});
const eld = computed(() => trackingData.value?.vehicleData?.eld_device || {});

const mapUrl = computed(() => {
    const lat = location.value.lat || 0;
    const lon = location.value.lon || 0;
    return `https://maps.google.com/maps?q=${lat},${lon}&z=14&output=embed`;
});

function convertKmToMph(kmh) {
    if (typeof kmh !== "number") return 0;
    return +(kmh * 0.621371).toFixed(2); // 1 km = 0.621371 mi
}
</script>

<template>
    <LsSubintro
        class="hasvideo"
        :videolink="'/media/tracking-new.mp4'"
        :title="'Tracking'"
        :desc="'Track your freight in real time by VIN — location, status, and delivery details, instantly.'" />
    <section
        class="ql-tracking"
        :class="{opened: trackingData?.vehicleData?.id && !isLoading}">
        <div class="ql-tracking__content container">
            <div class="ql-trackform">
                <div class="ql-trackform__holder">
                    <h2 class="ql-trackform__title">Vehicle Tracking</h2>
                    <p class="ql-trackform__description">Enter the VIN number to track the vehicle</p>
                    <div class="ql-trackform__input-wrapper">
                        <LsInput
                            v-model="vin"
                            class="ql-trackform__input"
                            placeholder="Enter VIN" />
                        <LsButton
                            @click="search"
                            :loading="isLoading">
                            Search
                        </LsButton>
                    </div>
                </div>
                <img
                    class="ql-trackform__image"
                    src="/images/truck.png"
                    alt="truck" />
            </div>
            <div
                v-if="trackingData?.vehicleData?.id && !isLoading"
                class="ql-trackinfo">
                <div class="ql-trackinfo__list">
                    <h2 class="ql-trackinfo__title">{{ trackingData.vehicleData.make }} {{ trackingData.vehicleData.model }}</h2>
                    <div class="ql-trackinfo__status-wrapper">
                        <p class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/vehicle-status.svg"
                                alt="icon" />
                            Status
                        </p>
                        <div
                            class="ql-trackinfo__status"
                            :class="[{green: location.vehicle_state === 'moving'}, {red: location.vehicle_state === 'off'}]">
                            {{ location.vehicle_state }}
                            <!-- Moving -->
                        </div>
                    </div>

                    <p class="ql-trackinfo__item w-100">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/location.svg"
                                alt="icon" />
                            Location:
                        </span>
                        <strong>{{ location.current_location }} ({{ location.city }}, {{ location.state }})</strong>
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/calendar.svg"
                                alt="icon" />
                            Year:
                        </span>
                        <strong>
                            {{ trackingData.vehicleData.year }}
                        </strong>
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/calendar.svg"
                                alt="icon" />
                            VIN:
                        </span>
                        {{ trackingData.vehicleData.vin }}
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/gas-station.svg"
                                alt="icon" />
                            Fuel Type:
                        </span>
                        {{ trackingData.vehicleData.fuel_type }}
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/registration.svg"
                                alt="icon" />
                            IFTA Registered:
                        </span>
                        {{ trackingData.vehicleData.ifta ? "Yes" : "No" }}
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/vehicle-status.svg"
                                alt="icon" />
                            Plate:
                        </span>
                        {{ trackingData.vehicleData.license_plate_number }} {{ trackingData.vehicleData.license_plate_state }}
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/speed.svg"
                                alt="icon" />
                            Speed:
                        </span>

                        {{ convertKmToMph(location.kph) }} mph
                        <!-- {{ location.kph?.toFixed(1) }} km/h -->
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/driver.svg"
                                alt="icon" />
                            Driver:
                        </span>
                        <strong>{{ driver.first_name }} {{ driver.last_name }}</strong>
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/device.svg"
                                alt="icon" />
                            ELD Device:
                        </span>
                        {{ eld.identifier }} ({{ eld.model }})
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/camera.svg"
                                alt="icon" />
                            Driver-facing Camera:
                        </span>
                        {{ trackingData.vehicleData.driver_facing_camera ? "Yes" : "No" }}
                    </p>
                    <p class="ql-trackinfo__item">
                        <span class="ql-trackinfo__item-title">
                            <img
                                class="ql-trackinfo__item-icon"
                                src="/icons/audio.svg"
                                alt="icon" />
                            In-cab Audio Recording:
                        </span>
                        {{ trackingData.vehicleData.incab_audio_recording ? "Yes" : "No" }}
                    </p>
                </div>

                <div class="ql-trackinfo__map">
                    <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowfullscreen
                        :src="mapUrl"></iframe>
                </div>
            </div>
        </div>
    </section>
    <LsJoinUs class="qltrck" />
</template>
