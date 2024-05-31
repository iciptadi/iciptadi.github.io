<template>
  <div class="container px-4 py-5">
    <div class="row py-5">
      <div class="col-md-6 offset-md-3">
        <img v-lazy="{
          src: '/undraw_Page_not_found_re_e9o6.png',
          loading: '/undraw_Loading_re_5axr.png',
        }" class="d-block mx-lg-auto img-fluid" alt="undraw_Page_not_found_re_e9o6">
        <h1 class="fw-bold lh-1 mb-3 text-center">404 - <span class="text-success">Page Not Found</span></h1>
        <p class="text-center">Oops! It looks like the page you're trying to access doesn't exist. <br>Return to the
          <RouterLink to="/">home page</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import {
  RouterLink,
} from "vue-router";

export default defineComponent({
  components: {},
  data() {
  },
});
</script>