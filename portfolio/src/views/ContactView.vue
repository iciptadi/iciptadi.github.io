<template>
  <div class="container px-4 py-5">
    <Breadcrumb :items="breadcrumbItems" />
    <div class="row g-5 py-5">
      <div class="col-12 col-sm-8 col-lg-6">
        <img src="/undraw_Personal_email_re_4lx7.png" class="d-block mx-lg-auto img-fluid card-img-top"
          alt="undraw_Personal_email_re_4lx7" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="fw-bold lh-1 mb-3">My <span class="text-success">Contact</span></h1>
        <p>Feel free to reach out to me. I'd love to hear from you!</p>
        <div class="row">
          <div class="col-sm-12 col-lg-6 mb-3">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Email</h5>
                <p class="card-text">
                  <a href="mailto:iciptadi98@gmail.com">iciptadi98@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 mb-3">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">LinkedIn</h5>
                <p class="card-text">
                  <a href="https://linkedin.com/in/irhamciptadi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Breadcrumb from '@/components/Breadcrumb.vue';

export default defineComponent({
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadcrumbItems: [
        {
          url: '#',
          icon: 'bi bi-house',
          label: 'Home',
        },
        {
          url: '#',
          icon: '',
          label: 'About',
        },
      ],
      techLogos: [
        {
          src: 'https://www.vectorlogo.zone/logos/php/php-ar21.svg',
          alt: 'PHP',
          width: 120,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg',
          alt: 'NodeJS',
          width: 120,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg',
          alt: 'MySQL',
          width: 120,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg',
          alt: 'PostgreSQL',
          width: 120,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/redis/redis-ar21.svg',
          alt: 'Redis',
          width: 120,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg',
          alt: 'Express',
          width: 120,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg',
          alt: 'Javascript',
          width: 120,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/jquery/jquery-ar21.svg',
          alt: 'Jquery',
          width: 100,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg',
          alt: 'Bootstrap',
          width: 100,
        },
        {
          src: '',
          alt: 'Codeigniter',
          width: 100,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg',
          alt: 'Laravel',
          width: 100,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg',
          alt: 'VueJS',
          width: 100,
        },
        {
          src: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg',
          alt: 'ReactJS',
          width: 100,
        },
      ],
      experiences: [
        {
          name: 'Software Engineer',
          location: 'PT Ama Salam Indonesia',
          when: 'Nov 2018 - now',
        },
        {
          name: 'Full Stack Developer',
          location: 'Camar Software',
          when: 'Agu 2017 - Des 2018',
        },
        {
          name: 'Web Application Developer',
          location: 'PT. Hexaon Business Mitrasindo',
          when: 'Mei 2016 - Okt 2017 · 1 thn 6 bln',
        },
      ]
    };
  },
});
</script>