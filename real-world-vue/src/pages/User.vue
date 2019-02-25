<template>
  <div class="user">
    <h1>This is a page for {{ $route.params.username }}</h1>
    <h1>{{ username }}</h1>
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>

<style></style>
