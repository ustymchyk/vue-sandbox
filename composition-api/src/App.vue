<template>
  <div class="counter">
    <p>Value: {{ counter }}</p>
    <label>
      Add:
      <input v-model="increaseValue"/>
    </label>
    <button @click="add()">Add</button>
  </div>
</template>

<script>
import counterComposition from './composables/counter';

export default {
  setup() {
    const { add, counter, increaseValue } = counterComposition();
    return { add, counter, increaseValue };
  },
};

</script>
