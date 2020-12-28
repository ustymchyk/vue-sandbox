<template>
  <Todo />
</template>

<script lang="ts">
import Todo from "./components/Todo.vue"; 

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Todo,
  }
});
</script>
