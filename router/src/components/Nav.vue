<template>
  <ul>
    <li>
      <a @click="goTo('/')">Home</a>
    </li>
    <li>
       <a @click="goTo('/page')">Page</a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'navigation',
  methods: {
    goTo(path) {
      this.$pushState(path);
    },
  },
};
</script>

<style>

</style>
