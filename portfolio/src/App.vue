<script setup lang="ts">
import {
  RouterView,
} from 'vue-router'
import Headers from './components/Headers.vue';
</script>

<template>
  <div class="container">
    <Headers />
    <RouterView />
  </div>
</template>