<template>
    <div class="container px-4 py-5">
        <Breadcrumb :items="breadcrumbItems" />
        <div class="row g-5 py-5">
            <div class="col-12 col-sm-8 col-lg-6">
                <img
                    src="/undraw_Multitasking_re_ffpb.png"
                    class="d-block mx-lg-auto img-fluid card-img-top"
                    alt="undraw_Multitasking_re_ffpb"
                    width="700"
                    height="500"
                    loading="lazy"
                />
            </div>
            <div class="col-lg-6">
                <h1 class="fw-bold lh-1 mb-3">
                    All About <span class="text-success">Myself</span>
                </h1>
                <p class="justify-content-between">
                    Full Stack Engineer Proficient in PHP, Node.js, JavaScript,
                    HTML, CSS, and adept at designing and optimizing database
                    structures using MySQL, PostgreSQL, and Redis. in
                    collaborating with cross-functional teams to deliver
                    innovative features, ensuring a seamless user experience.
                </p>
                <p>
                    I have a strong background in leading the development of
                    robust and scalable web applications, coupled with a keen
                    eye for detail in manual testing procedures.
                </p>
                <p>
                    My expertise extends to developing RESTful APIs, integrating
                    third-party services, and contributing to the creation of
                    efficient web applications using Vue.js and React.js
                    templates.
                </p>
                <!-- <p>
          Saya adalah seorang <b>Software Engineer</b> dengan pengalaman dalam <b>pengembangan aplikasi web dan mobile</b>
          menggunakan berbagai teknologi terkini. Saya memiliki keahlian dalam bahasa pemrograman <b>PHP, Node.js</b>,
          serta
          pengelolaan basis data <b>MySQL, PostgreSQL</b>, dan <b>Redis</b>. Saya juga berpengalaman dalam kerangka kerja
          seperti <b>CodeIgniter, Laravel, ExpressJS, Vue.js, React.js </b>, dan pernah juga menggunakan <b>React
            Native</b>.
        </p>
        <p>
          Dalam karir saya, <b>saya telah bekerja pada berbagai proyek</b> yang melibatkan pembuatan aplikasi web,
          mobile and Rest API. Saya sangat antusias untuk terus belajar dan mengikuti perkembangan
          teknologi terbaru untuk memastikan bahwa proyek-proyek yang saya kerjakan tetap inovatif dan kompetitif.
        </p>
        <p>
          Saya percaya bahwa kolaborasi dan komunikasi yang baik adalah kunci keberhasilan proyek, dan <b>saya siap
            bekerja sama</b> dengan tim untuk mencapai tujuan bersama. Jika Anda tertarik untuk berkolaborasi dalam proyek
          berikutnya atau berbagi pengalaman, jangan ragu untuk <b>menghubungi saya</b>. Saya selalu <b>terbuka untuk
            peluang baru</b>.
        </p> -->
            </div>
        </div>
        <div class="row g-5 py-5">
            <h1 class="fw-bold lh-1 mb-3 px-2">
                My <span class="text-success">Skills & Experiences</span>
            </h1>
            <div class="row g-3">
                <div class="col col-sm-12 col-lg-6">
                    <h3 class="py-3">Skills</h3>
                    <div
                        v-for="(logo, index) in techLogos"
                        :key="index"
                        class="d-inline-block"
                    >
                        <img
                            v-if="logo.src"
                            :src="logo.src"
                            class="rounded px-2"
                            :alt="logo.alt"
                            width="120"
                            loading="lazy"
                        />
                        <span v-else>
                            {{ logo.alt }}
                        </span>
                    </div>
                </div>
                <div class="col col-sm-12 col-lg-6">
                    <h3 class="py-3">Experiences</h3>
                    <div class="list-group">
                        <a
                            v-for="(experience, index) in experiences"
                            :key="index"
                            href="#"
                            class="list-group-item list-group-item-action d-flex gap-3 py-3 border-white"
                            aria-current="true"
                        >
                            <i
                                class="bi bi-suitcase-lg-fill rounded-circle flex-shrink-0"
                                width="32"
                                height="32"
                            ></i>
                            <div
                                class="d-flex gap-2 w-100 justify-content-between"
                            >
                                <div>
                                    <h6 class="mb-0">{{ experience.name }}</h6>
                                    <p class="mb-0 opacity-75">
                                        at {{ experience.location }}
                                    </p>
                                </div>
                                <small class="opacity-50 text-nowrap">{{
                                    experience.when
                                }}</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row g-4 py-2 row-cols-1 row-cols-lg-3">
                <div class="col">
                    <div
                        class="d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 px-2 rounded"
                    >
                        <i class="bi bi-book-fill"></i>
                    </div>
                    <h3>Quick Learning</h3>
                    <p>
                        Best software developers are often fantastic
                        self-learners.The ideal skill any person can have is
                        understanding how to learn, and ideal developers have
                        acquired the skill of self-learning.
                    </p>
                </div>
                <div class="col">
                    <div
                        class="d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 px-2 rounded"
                    >
                        <i class="bi bi-lightbulb-fill"></i>
                    </div>
                    <h3>Problem Solving</h3>
                    <p>
                        Problem-solving is a one of the most important part of
                        the work. Problem-solving also has to do with utilizing
                        creativity and logical thought processes to identify
                        problems and resolve them with software.
                    </p>
                </div>
                <div class="col">
                    <div
                        class="d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 px-2 rounded"
                    >
                        <i class="bi bi-heart-fill"></i>
                    </div>
                    <h3>Honesty</h3>
                    <p>
                        Software developers need to learn to admit their
                        mistakes. Of course, making a mistake occurs to all of
                        us. The most important thing to do is to make an effort
                        to learn from them and try to avoid them later in life.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Breadcrumb from "@/components/Breadcrumb.vue";

export default defineComponent({
    components: {
        Breadcrumb,
    },
    data() {
        return {
            breadcrumbItems: [
                {
                    url: "#",
                    icon: "bi bi-house",
                    label: "Home",
                },
                {
                    url: "#",
                    icon: "",
                    label: "About",
                },
            ],
            techLogos: [
                {
                    src: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
                    alt: "PHP",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
                    alt: "NodeJS",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
                    alt: "MySQL",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
                    alt: "PostgreSQL",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg",
                    alt: "Redis",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
                    alt: "Express",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg",
                    alt: "Javascript",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/jquery/jquery-ar21.svg",
                    alt: "Jquery",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg",
                    alt: "Bootstrap",
                },
                {
                    src: "",
                    alt: "Codeigniter",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg",
                    alt: "Laravel",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg",
                    alt: "VueJS",
                },
                {
                    src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
                    alt: "ReactJS",
                },
            ],
            experiences: [
                {
                    name: "Full Stack Engineer",
                    location: "PT Ama Salam Indonesia",
                    when: "Feb 2024 - Present",
                },
                {
                    name: "Software Engineer",
                    location: "PT Ama Salam Indonesia",
                    when: "Nov 2019 - Jan 2024",
                },
                {
                    name: "Junior Software Engineer",
                    location: "PT Ama Salam Indonesia",
                    when: "November 2018 - October 2019",
                },
                {
                    name: "Full Stack Developer",
                    location: "Camar Software",
                    when: "August 2017 - December 2018",
                },
                {
                    name: "Web Application Developer",
                    location: "PT. Hexaon Business Mitrasindo",
                    when: "May 2016 - October 2017",
                },
            ],
        };
    },
});
</script>
