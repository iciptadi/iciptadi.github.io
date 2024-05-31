<template>
    <!-- BEGIN:HEROES -->
    <div class="container col-xxl-10 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-sm-12 col-lg-6">
                <img
                    v-lazy="{
                        src: '/undraw_Working_from_anywhere_re_9obt.png',
                        loading: 'https://picsum.photos/536/354',
                        error: 'https://picsum.photos/536/354',
                    }"
                    class="d-block mx-lg-auto img-fluid"
                    alt="undraw_Working_from_anywhere_re_9obt"
                />
            </div>
            <div class="col-sm-12 col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">
                    HI, I'm Irham C. Software Engineer
                </h1>
                <p class="lead">
                    I am passionate about learning, creating innovative
                    products, and collaborations, so lets connect.
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a
                        href="https://linkedin.com/in/irhamciptadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary btn-lg px-4 me-md-2"
                        >LinkedIn <i class="bi bi-linkedin"></i>
                    </a>
                    <a
                        href="#"
                        rel="noopener noreferrer"
                        class="btn btn-outline-dark btn-lg px-4 me-md-2"
                    >
                        Resume
                        <i class="bi bi-download"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- END:HEROES -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    data() {
        return {
            currentUrl: location.toString(),
            host: location.host,
        };
    },
});
</script>
