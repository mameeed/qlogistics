<script setup>
import {inject} from "vue";

const amodal = inject("amodal");
</script>

<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__inner">
                <div class="footer__about">
                    <img
                        class="footer__about-logo"
                        src="/icons/ls-logo.svg"
                        alt="logo" />
                    <p class="footer__about-text">We are a US-based logistics company, and we strive to build long-term relationships with our clients.</p>

                    <div class="footer__social">
                        <a
                            href="https://t.me/QualityLogisticsOH"
                            target="_blank">
                            <img
                                src="/icons/telegram.svg"
                                alt="telegram" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank">
                            <img
                                src="/icons/youtube.svg"
                                alt="youtube" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank">
                            <img
                                src="/icons/linkedin.svg"
                                alt="linkedin" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank">
                            <img
                                src="/icons/instagram.svg"
                                alt="instagram" />
                        </a>
                    </div>
                </div>

                <div class="footer__links-wrapper">
                    <div class="footer__links">
                        <h3>Sitemap</h3>
                        <div class="footer__links-list">
                            <router-link to="/">Home page</router-link>
                            <router-link to="/about">About us</router-link>
                            <router-link to="/services">Our Services</router-link>
                            <router-link to="/blog">Our Blog</router-link>
                            <router-link to="/contact">Contac us</router-link>
                        </div>
                    </div>
                    <div class="footer__links">
                        <h3>Quick links</h3>
                        <div class="footer__links-list">
                            <a @click="amodal.openApply()">Apply to drive</a>
                            <a @click="amodal.openGetQuote()">Get a quote</a>
                            <router-link to="/tracking">Tracking</router-link>
                            <a
                                href="https://amazon.com"
                                target="_blank">
                                Amazon
                            </a>
                        </div>
                    </div>
                    <div class="footer__links">
                        <h3>About</h3>
                        <div class="footer__links-list">
                            <router-link to="/about#vision">Mission, VIsion & Values</router-link>
                            <router-link to="/about#corporate">Corporate Governanace</router-link>
                            <router-link to="/about">Shareholders</router-link>
                            <router-link to="/about">Investor Relations</router-link>
                        </div>
                    </div>
                </div>

                <div class="footer__contacts">
                    <a
                        href="https://maps.app.goo.gl/3VoYfxLZT4PWERoH8"
                        target="_blank"
                        class="footer__contact">
                        <img
                            src="/icons/location.svg"
                            alt="" />
                        <strong>Office Location:</strong>
                        7100 Foundry Row STE 288-112, Liberty Township, OH 45069
                    </a>
                    <a
                        href="tel:+1(513)823-0059"
                        target="_blank"
                        class="footer__contact">
                        <img
                            src="/icons/phone.svg"
                            alt="" />
                        <strong>Phone:</strong>
                        +1(513)823-0059
                    </a>
                    <a
                        href="tel:+1(513)838-5900"
                        target="_blank"
                        class="footer__contact">
                        <img
                            src="/icons/phone.svg"
                            alt="" />
                        <strong>Management Phone:</strong>
                        +1(513)838-5900
                    </a>
                    <a
                        href="mailto:admin@goqualitylogistics.com"
                        target="_blank"
                        class="footer__contact">
                        <img
                            src="/icons/email.svg"
                            alt="" />
                        <strong>e-mail:</strong>
                        admin@goqualitylogistics.com
                    </a>
                    <a
                        href="mailto:dispatch@goqualitylogistics.com"
                        target="_blank"
                        class="footer__contact">
                        <img
                            src="/icons/email.svg"
                            alt="" />
                        <strong>24/7 Dispatch e-mail:</strong>
                        dispatch@goqualitylogistics.com
                    </a>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="footer__copyright-content container">
                <p class="footer__copyright-text">© Quality Logistics LLC {{ new Date().getFullYear() }}</p>
                <!-- <p class="footer__copyright-dev">
                    Coded with ❤️ by
                    <a
                        href="#!"
                        target="_blank">
                        Mameed
                    </a>
                </p> -->
            </div>
        </div>
    </footer>
</template>
