<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <p>{{ getEventById(2) }}</p>
    <button @click="incrementCount">Increment</button>
    <input type="number" v-model.number="incrementBy" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      incrementBy: 1
    }
  },
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  },
  methods: {
    //mutation testing
    // incrementCount() {
    //   this.$store.commit('INCREMENT_COUNT', this.incrementBy)
    // }
    //action testing
    incrementCount() {
      this.$store.dispatch('updateCount', this.incrementBy)
    }
  }
}
</script>

<style scoped></style>
