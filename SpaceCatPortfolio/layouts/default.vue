<template>
  <div id="app" class="application">
    <NavBar class="stagger"/>
    <nuxt/>
    <Footer class="stagger"/>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
@import "./assets/sass/base.variables";
</style>
