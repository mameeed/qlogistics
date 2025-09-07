<script setup>
import {ref, inject, onMounted, onBeforeUnmount} from "vue";

const isScrolled = ref(false);
const handleScroll = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth < 577) return;

    if (window.pageYOffset > 140) {
        isScrolled.value = true;
    } else if (isScrolled.value && window.pageYOffset <= 140 && window.pageYOffset > 0) {
        return;
    } else {
        isScrolled.value = false;
    }
};

const amodal = inject("amodal");
const isNavOpen = ref(false);

const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
    if (isNavOpen.value) {
        document.body.style.overflow = "hidden";
        window.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("header__hamburger")) return;
            isNavOpen.value = false;
            document.body.style.overflow = "unset";
        });
    } else {
        document.body.style.overflow = "unset";
        window.removeEventListener("click", (evt) => {
            if (evt.target.classList.contains("header__hamburger")) return;
            isNavOpen.value = false;
            document.body.style.overflow = "unset";
        });
    }
};

onMounted(() => {
    ["mousewheel", "scroll", "gesturechange"].forEach((evt) => window.addEventListener(evt, handleScroll, false));

    let windowWidth = window.innerWidth;
    if (windowWidth.value < 577) isScrolled.value = true;

    handleScroll();
});

onBeforeUnmount(() => {
    ["mousewheel", "scroll", "gesturechange"].forEach((evt) => window.removeEventListener(evt, handleScroll, false));
});
</script>

<template>
    <header
        class="header"
        :class="{open: isNavOpen}">
        <div
            class="header__wrapper"
            :class="{scrolled: isScrolled || $route.name !== 'home'}">
            <div class="container header__container">
                <router-link to="/">
                    <img
                        src="/icons/ls-logo.svg"
                        width="150"
                        alt="Logo"
                        class="header__logo" />
                </router-link>

                <div
                    class="header__nav"
                    :class="{open: isNavOpen}">
                    <router-link
                        to="/about"
                        class="header__link"
                        :class="{'ql-active': $route.name === 'about'}">
                        About
                    </router-link>
                    <router-link
                        to="/services"
                        class="header__link"
                        :class="{'ql-active': $route.name === 'services'}">
                        Services
                    </router-link>
                    <router-link
                        to="/tracking"
                        class="header__link"
                        :class="{'ql-active': $route.name === 'tracking'}">
                        Tracking
                    </router-link>
                    <router-link
                        to="/blog"
                        class="header__link"
                        :class="{'ql-active': $route.name === 'blog'}">
                        Blog
                    </router-link>
                    <router-link
                        to="/contact"
                        class="header__link"
                        :class="{'ql-active': $route.name === 'contact'}">
                        Contact
                    </router-link>
                    <a
                        @click="amodal.openApply()"
                        class="header__link">
                        Apply
                    </a>
                </div>

                <div class="header__actions">
                    <LsButton
                        @click="amodal.openGetQuote()"
                        class="header__button">
                        Get a Quote
                    </LsButton>
                    <LsButton
                        class="header__hamburger"
                        type="inverse"
                        @click="toggleNav"
                        :class="{open: isNavOpen}">
                        <span class="header__hamburger-line"></span>
                        <span class="header__hamburger-line"></span>
                        <span class="header__hamburger-line"></span>
                    </LsButton>
                </div>
            </div>
        </div>
    </header>
</template>
