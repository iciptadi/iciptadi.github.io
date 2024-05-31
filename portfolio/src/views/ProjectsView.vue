<template>
  <div class="container px-4 py-5">
    <Breadcrumb :items="breadcrumbItems" />
    <div class="row py-5">
      <h1 class="fw-bold lh-1 mb-3">My <span class="text-success">Projects</span></h1>
      <p>Not all project / portfolio show in here, so please check my LinkedIn for Update, thansk <i
          class="bi bi-emoji-smile"></i> </p>
      <div class="row py-5">
        <div v-for="(project, index) in projects" :key="index" class="col-sm-12 col-md-6 col-lg-4">
          <div class="card mb-4 shadow-sm">
            <img :src="project.src" class="card-img-top" alt="undraw_Working_from_anywhere_re_9obt" height="300"
              loading="lazy">
            <div class="card-body">
              <h5 class="card-title">{{ truncateText(project.name, 35) }}</h5>
              <p class="card-text" style="min-height: 100px; max-height: 100px;">{{ truncateText(project.description, 300)
              }}
              </p>
              <div class="g-1 py-5">
                <span v-for="tag in project.tags" class="badge rounded-pill mx-1"
                  :style="{ backgroundColor: getRandomColor() }">{{ tag }}</span>
              </div>
            </div>
            <div class="card-footer bg-white">
              <RouterLink :to="'/projects/' + project.id" class="card-link text-success float-end">
                Read More
                <i class="bi bi-box-arrow-up-right"></i>
              </RouterLink>
            </div>
          </div>
        </div>
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
      projects: [
        {
          id: 1,
          name: 'Personal Portfolio',
          src: '/undraw_snap_the_moment_re_88cu.png',
          description: 'Personal Portfolio showcasing skills, projects, and achievements',
          tags: [
            "VueJS",
            "Bootstrap",
          ],
        },
        {
          id: 2,
          name: 'Sistem Pengajuan Asuransi Jiwa Syariah (SPAJ)',
          src: '/undraw_snap_the_moment_re_88cu.png',
          description: 'Sistem Pengajuan Asuransi Jiwa Syariah (SPAJ)',
          tags: [
            "VueJS",
            "Bootstrap",
          ],
        },
        {
          id: 3,
          name: 'Aplikasi Laundry',
          src: '/undraw_snap_the_moment_re_88cu.png',
          description: 'Aplikasi Laundry',
          tags: [
            "PHP",
            "Bootstrap",
            "MySQL",
          ],
        },
        {
          id: 4,
          name: 'Aplikasi Management Lab',
          src: '/undraw_snap_the_moment_re_88cu.png',
          description: 'Web Company Profile',
          tags: [
            "PHP",
            "Codeigniter",
            "Jquery",
            "Bootstrap",
            "MySQL",
          ],
        },
        {
          id: 5,
          name: 'Web Company Profile',
          src: '/undraw_snap_the_moment_re_88cu.png',
          description: 'Web Company Profile',
          tags: [
            "PHP",
            "Bootstrap",
            "Jquery",
            "MySQL",
          ],
        },
      ],
    };
  },
  methods: {
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    truncateText(text: string, maxLength: number) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.slice(0, maxLength) + '...';
      }
    },
  },
});
</script>