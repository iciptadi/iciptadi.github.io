<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-custom overflow-hidden text-center bg-body-tertiary border rounded-3">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
        <a :href="item.url" class="link-body-emphasis fw-semibold text-decoration-none">
          <i :class="item.icon" width="16" height="16"></i>
          {{ item.label }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Array<{ url: string; icon: string; label: string }>>,
      required: true,
    },
  },
});
</script>