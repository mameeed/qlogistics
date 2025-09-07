<script setup>
import USMap from "@/components/USMap.vue";
</script>

<template>
    <section class="map-info">
        <div class="container map-info__container">
            <div class="map-info__header">
                <h2 class="map-info__title">Our Presence at a Glance</h2>
                <p class="map-info__description">Explore our operations across the United States. Click on any state to see how many deliveries we’ve completed, where our base points are located, and which services we offer in that region</p>
            </div>
            <div>
                <USMap />
            </div>
        </div>
    </section>
</template>
