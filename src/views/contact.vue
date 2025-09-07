<script setup>
import LsSubintro from "@/components/LsSubintro.vue";
import LsJoinus from "@/components/landing/JoinUs.vue";
</script>

<template>
    <main>
        <LsSubintro
            class="hasvideo"
            videolink="/media/intro-3.mp4"
            :title="'Contact'"
            :desc="'Get in touch with Quality Logistics today! Our team is ready to assist with your trucking needs. Reach out via phone, email, or our contact form for fast, personalized support.'" />

        <section class="ql-contact">
            <div class="ql-contact__content container">
                <div class="ql-contact__list">
                    <h1 class="ql-contact__title">Get in touch</h1>
                    <p class="ql-contact__desc">
                        Have questions or need assistance? Our team is here to help. Reach out to us via phone, email, or our online contact form. We’re here to ensure your experience with Quality Logistics Way is smooth and efficient.
                    </p>

                    <a
                        href="https://maps.app.goo.gl/3VoYfxLZT4PWERoH8"
                        target="_blank"
                        class="ql-contact__item">
                        <img
                            src="/icons/location.svg"
                            alt="" />
                        <strong>Office Location:</strong>
                        <p>7100 Foundry Row STE 288-112, Liberty Township, OH 45069</p>
                    </a>
                    <a
                        href="tel:+1(513)823-0059"
                        target="_blank"
                        class="ql-contact__item">
                        <img
                            src="/icons/phone.svg"
                            alt="" />
                        <strong>Phone:</strong>
                        <p>+1(513)823-0059</p>
                    </a>
                    <a
                        href="tel:+1(513)838-5900"
                        target="_blank"
                        class="ql-contact__item">
                        <img
                            src="/icons/phone.svg"
                            alt="" />
                        <strong>Management Phone:</strong>
                        <p>+1(513)838-5900</p>
                    </a>
                    <a
                        href="mailto:admin@goqualitylogistics.com"
                        target="_blank"
                        class="ql-contact__item">
                        <img
                            src="/icons/email.svg"
                            alt="" />
                        <strong>e-mail:</strong>
                        <p>admin@goqualitylogistics.com</p>
                    </a>
                    <a
                        href="mailto:dispatch@goqualitylogistics.com"
                        target="_blank"
                        class="ql-contact__item">
                        <img
                            src="/icons/email.svg"
                            alt="" />
                        <strong>24/7 Dispatch e-mail:</strong>
                        <p>dispatch@goqualitylogistics.com</p>
                    </a>
                </div>
                <div class="ql-contact__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.96759883794!2d-84.37134323077127!3d39.37188514556182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88405a3e27a6a917%3A0xcca1bb3a36d4e288!2s7100%20Foundry%20Row%20288%20112%2C%20Liberty%20Township%2C%20OH%2045069%2C%20USA!5e1!3m2!1sen!2s!4v1747238980281!5m2!1sen!2s"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>

        <LsJoinus />
    </main>
</template>
