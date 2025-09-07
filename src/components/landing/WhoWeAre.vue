<script setup></script>

<template>
    <section class="qlwware">
        <div class="qlwware__content">
            <div class="qlwware__desc">
                <h1 class="qlwware__title">Who We Are</h1>

                <p class="qlwware__desc-text">
                    At Quality Logistics, we’re more than just a freight company — we’re a team of logistics professionals committed to moving your business forward. Founded on the principles of integrity, accountability, and efficiency, we’ve built
                    a reputation for delivering dependable and flexible transportation solutions across the United States.
                </p>

                <p class="qlwware__desc-text">
                    With deep industry experience and a passion for service, we work closely with our clients to understand their needs and deliver with precision. Whether you're moving a single load or managing an entire fleet, we treat every
                    shipment like it’s mission-critical — because to us, it is.
                </p>

                <p class="qlwware__desc-text">We believe that strong partnerships, clear communication, and modern logistics technologies are the key to long-term success — and we bring that philosophy to every mile we drive.</p>

                <a
                    v-if="$route.name === 'home'"
                    href="#!"
                    class="qlwware__btn">
                    <p class="qlwware__btn-label">Read more</p>
                    <img
                        class="qlwware__btn-icon"
                        src="/icons/arrow-left.svg"
                        alt="icon" />
                </a>
            </div>
        </div>
        <div class="qlwware__image">
            <img
                class="qlwware__image-image"
                src="/images/red-truck.png"
                alt="image" />
        </div>
    </section>
</template>
