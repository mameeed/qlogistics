<script setup>
import {ref, inject, onMounted} from "vue";
const news = ref([]);
const loading = ref(true);
const error = ref(null);

async function fetchData() {
    try {
        const response = await fetch("/data/qlogistics_news.json");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        news.value = data.slice(0, 4);
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}

onMounted(fetchData);
</script>

<template>
    <section class="qlblog">
        <div class="qlblog__content container">
            <h1 class="qlblog__title">Latest news and tips</h1>
            <p class="qlblog__desc">Read the latest articles from the experts at Penske Logistics.</p>

            <div class="qlblog__cards">
                <div
                    v-for="(item, index) in news"
                    :key="item"
                    class="blogcard">
                    <img
                        :src="item.image"
                        alt="image"
                        class="blogcard__image" />

                    <div class="blogcard__content">
                        <div class="blogcard__date">
                            <img
                                class="blogcard__date-icon"
                                src="/icons/calendar.svg"
                                alt="icon" />

                            <p class="blogcard__date-label">{{ item.date }}</p>
                        </div>
                        <h3 class="blogcard__title">{{ item.title }}</h3>
                        <p class="blogcard__desc">{{ item.description }}</p>
                        <a
                            v-if="index === 0"
                            href="#!"
                            class="blogcard__btn">
                            <p class="blogcard__btn-label">Read more</p>
                            <img
                                class="blogcard__btn-icon"
                                src="/icons/arrow-left.svg"
                                alt="icon" />
                        </a>
                    </div>
                </div>
            </div>

            <LsButton
                v-if="$route.name === 'home'"
                class="qlblog__btn"
                to="#!">
                Read all news
            </LsButton>
        </div>
    </section>
</template>
