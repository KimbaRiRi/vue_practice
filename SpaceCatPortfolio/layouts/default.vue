<template>
  <div id="app" class="application">
    <!-- <div class="container:fluid"></div> -->
    <div class="transition-panel"></div>
    <app-header class="stagger"/>
    <nuxt/>
    <app-footer class="stagger"/>
  </div>
</template>

<script>
import AppHeader from "~/components/header.vue";
import AppFooter from "~/components/footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
@import "./assets/sass/variables";
</style>
