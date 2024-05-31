<template>
  <div class="container px-4 py-5">
    <Breadcrumb :items="breadcrumbItems" />
    <div class="row py-5">
      <!-- {{ $route.params.id }} -->
      <div class="col-md-6 offset-md-3">
        <img v-lazy="{
          src: '/undraw_under_construction_46pa.png',
          loading: '/undraw_Loading_re_5axr.png',
        }" class="d-block mx-lg-auto img-fluid" alt="undraw_under_construction_46pa">
        <h1 class="fw-bold lh-1 mb-3 text-center">Website Under <span class="text-success">Construction</span></h1>
        <p>We're currently working on making our website even better. Please check back later for updates and
          improvements. Thank you for your patience!</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
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
          label: 'Projects',
        },
      ],
    };
  },
});
</script>