<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar },
};
</script>
