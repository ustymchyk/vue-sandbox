<template>
  <ul class="events">
    <li class="event" v-for="event in events" :key="event.id">
      <p class="title">{{ event.name }}</p>
      <p class="date">{{ event.data }}</p>
    </li>
  </ul>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const data = reactive({
      events: [],
    });

    fetch('http://localhost:3000/events')
      .then((res) => res.json())
      .then((res) => { data.events = res; })
      .catch((err) => console.log(err))
      .finally(() => {});

    return { ...toRefs(data) };
  },
};
</script>

<style>

</style>
