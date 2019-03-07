<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input v-model="event.title" type="text" placeholder="Add an event title" />
  </div>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>
