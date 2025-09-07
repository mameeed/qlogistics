<script setup>
import {inject} from "vue";

const amodal = inject("amodal");
</script>

<template>
    <section class="join-us">
        <div class="container join-us__container">
            <div class="join-us__header">
                <h2>Let’s Move Forward Together</h2>
                <p>Whether you're shipping freight or looking to drive with purpose, Quality Logistics is the partner you can rely on. Join a company that values trust, speed, and long-term success</p>
            </div>

            <div class="join-us__content">
                <LsButton
                    @click="amodal.openGetQuote()"
                    :to="'#!'">
                    Get a quote
                </LsButton>
                <LsButton
                    :to="'#!'"
                    @click="amodal.openApply()"
                    type="inverse">
                    Apply to drive
                </LsButton>
            </div>
        </div>
    </section>
</template>
