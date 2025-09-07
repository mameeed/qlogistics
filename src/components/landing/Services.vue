<script setup>
const services = [
    {
        id: 1,
        title: "Dry Van",
        description: "We offer a wide range of dry van services to meet your needs.",
        image: "/images/services-dry-van2.jpg",
    },
    {
        id: 2,
        title: "Refrigerated Van",
        description: "We offer a wide range of dry van services to meet your needs.",
        image: "/images/services-refridgerator.jpg",
    },
    {
        id: 3,
        title: "Hazmat",
        description: "We offer a wide range of dry van services to meet your needs.",
        image: "/images/services-hazmat.jpg",
    },
    {
        id: 4,
        title: "Power Only",
        description: "We offer a wide range of dry van services to meet your needs.",
        image: "/images/services-power2.jpg",
    },
];
</script>

<template>
    <section class="services">
        <div class="container services__container">
            <div class="services__header">
                <h2 class="services__title">Our Comprehensive Freight Solutions</h2>
                <p class="services__description">Find out more about our comprehensive freight solutions, including Power Only, Dry Van, Refrigerated Van, and Hazmat services.</p>
            </div>

            <div class="services__list">
                <div
                    v-for="service in services"
                    :key="service.id"
                    class="services__item">
                    <div class="services__image-wrapper">
                        <img
                            class="services__image"
                            :src="service.image"
                            :alt="service.title" />
                    </div>
                    <div class="services__content">
                        <h3 class="services__item-title">{{ service.title }}</h3>
                        <!-- <router-link
                            class="services__item-link"
                            to="#!">
                            <img
                                src="/icons/arrow-right.svg"
                                alt="" />
                        </router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
