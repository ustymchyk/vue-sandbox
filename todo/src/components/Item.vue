<template>
  <li class="item">
    {{ todo }}

    <button @click="remove">Delete</button>
  </li>
</template>

<script>
import { defineComponent } from "vue";


export default defineComponent({
  props: {
    todo: String,
  },
  methods: {
    remove() {
      this.$emit('remove', {
        todo: this.todo,
      });
    },
  },
});
</script>

<style scoped>
  
</style>