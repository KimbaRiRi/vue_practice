<template>
  <featured/>
</template>
<script>
import Featured from "~/views/featured.vue";

export default {
  layout: "default",
  components: {
    featured: Featured
  },
  data() {
    return {
      title: "Featured"
    };
  },
  head() {
    return {
      title: "Space Cat AKA Gyuri | " + this.title
    };
  },
  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.title);
  }
};
</script>
