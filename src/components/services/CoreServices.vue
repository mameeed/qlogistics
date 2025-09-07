<script setup>
const services = [
    {
        title: "🚚 Trucking (FTL & LTL)",
        desc: "We operate a robust network of carriers across the U.S., providing flexible Full Truckload (FTL) and Less-than-Truckload (LTL) services. We ensure secure, and cost-effective freight transportation for businesses.",
        image: "/icons/truck.gif",
    },
    {
        title: "🚢 Drayage",
        desc: "From port to final destination, our drayage experts handle container moves with precision. We streamline port operations and connect you with reliable transport across the country.",
        image: "/icons/ship.gif",
    },
    {
        title: "🔁 Cross-Docking",
        desc: "Speed up delivery and reduce storage costs with our cross-docking solutions. Through strong warehouse partnerships, we ensure faster transfers and minimal handling for time-sensitive loads.",
        image: "/icons/warehouse.gif",
    },
    {
        title: "📊 Consulting",
        desc: "Need help optimizing your supply chain? Our logistics consultants provide everything from strategic advice to full-service operational outsourcing tailored to your business goals.",
        image: "/icons/consultation.gif",
    },
    // {
    //     title: "🏢 Warehousing",
    //     desc: "We offer secure, scalable storage options through our trusted warehousing network. Whether short-term or long-term, your cargo is protected and ready for dispatch whenever you are.",
    //     image: "cccc",
    // },
];
</script>

<template>
    <!-- <section class="qlsv-core">
        <div class="qlsv-core__content container">
            <div class="qlsv-core__titling">
                <h1 class="qlsv-core__title">Core services</h1>
                <p class="qlsv-core__desc">At Quality Logistics, we offer a full suite of freight and supply chain solutions designed to meet the evolving needs of our customers — efficiently, reliably, and nationwide.</p>
            </div>

            <div class="qlsv-core__list">
                <div
                    v-for="(item, index) in services"
                    :key="index"
                    class="servicecard">
                    <img
                        class="servicecard__image"
                        :src="item.image"
                        alt="image" />

                    <h3 class="servicecard__title">{{ item.title }}</h3>
                    <p class="servicecard__desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </section> -->
    <section class="qlab-mission">
        <div class="qlab-mission__content container">
            <div class="qlab-mission__info">
                <h1 class="qlab-mission__title">Stay Connected with Real-Time Updates</h1>
                <p>
                    At Quality Logistics, we understand the importance of knowing where your freight is at all times. Our Live Location Sharing feature provides you with real-time updates on your shipment’s status and location. With our advanced
                    tracking technology, you can monitor your cargo from pickup to delivery, ensuring transparency and peace of mind. Whether you’re managing a single shipment or an entire fleet, our live tracking keeps you informed, allowing you to
                    make timely decisions and stay ahead of any potential issues. Experience the convenience and reliability of staying connected with Quality Logistics live location sharing.
                </p>
            </div>

            <div class="qlab-mission__image">
                <img
                    class="qlab-mission__image-file"
                    src="/images/services-1.jpg"
                    alt="mission" />
            </div>
        </div>
    </section>
    <section class="qlab-mission">
        <div class="qlab-mission__content container">
            <div class="qlab-mission__image">
                <img
                    class="qlab-mission__image-file"
                    src="/images/services-2.jpg"
                    alt="mission" />
            </div>
            <div class="qlab-mission__info lefted">
                <h1 class="qlab-mission__title">Enhance Efficiency with Intelligent Geofencing</h1>
                <p>
                    Quality Logistics Smart Geofencing Solution revolutionizes the way you manage your freight logistics. By setting up virtual perimeters around key locations such as warehouses, distribution centers, and delivery points, our smart
                    geofencing technology provides automated alerts and precise tracking of your shipments. This intelligent system enhances operational efficiency by notifying you of arrivals and departures, reducing wait times, and ensuring timely
                    deliveries. Stay ahead of the curve with our cutting-edge geofencing solutions, designed to optimize your logistics operations and provide unparalleled visibility and control over your freight movements.
                </p>
            </div>
        </div>
    </section>
    <section class="qlab-mission">
        <div class="qlab-mission__content container">
            <div class="qlab-mission__info">
                <h1 class="qlab-mission__title">Optimize Your Deliveries with Advanced Route Planning</h1>
                <p>
                    Quality Logistics Smart Route Optimization technology takes the guesswork out of route planning, ensuring your deliveries are as efficient and cost-effective as possible. By analyzing traffic patterns, road conditions, and
                    delivery windows, our advanced system determines the most optimal routes for your shipments. This not only reduces transit times and fuel costs but also enhances reliability and customer satisfaction. With Smart Route
                    Optimization, you can streamline your logistics operations, minimize delays, and achieve a higher level of efficiency and service excellence.
                </p>
            </div>

            <div class="qlab-mission__image">
                <img
                    class="qlab-mission__image-file"
                    src="/images/services-3.jpg"
                    alt="mission" />
            </div>
        </div>
    </section>
    <section class="qlab-mission">
        <div class="qlab-mission__content container">
            <div class="qlab-mission__image">
                <img
                    class="qlab-mission__image-file"
                    src="/images/services-4.webp"
                    alt="mission" />
            </div>
            <div class="qlab-mission__info lefted">
                <h1 class="qlab-mission__title">Maximize Safety and Efficiency with AI-Driven Insights</h1>
                <p>
                    Quality Logistics, we leverage cutting-edge AI-Powered Driver Performance Surveillance to enhance the safety and efficiency of our operations. This advanced technology continuously monitors driver behavior, analyzing factors such
                    as speed, braking patterns, and adherence to routes. By providing real-time feedback and actionable insights, our AI system helps drivers improve their performance and reduce the risk of accidents. This not only ensures the safety
                    of our drivers and cargo but also optimizes fuel efficiency and reduces operational costs. Experience the benefits of a smarter, safer, and more efficient fleet with our AI-powered solutions.
                </p>
            </div>
        </div>
    </section>
</template>
