<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- BEGIN:NAV -->
  <nav class="navbar navbar-expand-lg fw-bold">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <RouterLink class="navbar-brand" to="/">Irham C.</RouterLink>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              active-class="active"
              to="/"
              aria-current="page"
              >Home</RouterLink
            >
          </li>
          <!-- <li class="nav-item">
                        <RouterLink
                            class="nav-link"
                            active-class="active"
                            to="/about"
                            >About</RouterLink
                        >
                    </li> -->
          <!-- <li class="nav-item">
                        <RouterLink
                            class="nav-link"
                            active-class="active"
                            to="/projects"
                            >Projects</RouterLink
                        >
                    </li> -->
          <!-- <li class="nav-item">
                        <RouterLink
                            class="nav-link"
                            active-class="active"
                            to="/projects"
                            >Projects</RouterLink
                        >
                    </li> -->
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/contact"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END:NAV -->
</template>
