<template>
  <div class="todo">
    <h1>Todo list: </h1>
    <input v-model="input"/>
    <button @click="addTodo">Add</button>
    <ul>
      <Item 
        v-for="todo in todos" 
        :key="todo" 
        :todo="todo"
        @remove="remove"
        />
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Item from "./Item.vue";

export default defineComponent({
  data() {
    return {
      input: 'Todo',
      todos: ['todo #1'],
    }
  },
  methods: {
    addTodo() {
      if (!this.input || this.todos.includes(this.input)) return;

      this.todos.push(this.input);
      this.input = '';
    },
    remove({ todo: todoToFilter }) {
      this.todos = this.todos.filter(todo => todo !== todoToFilter);
    }
  },
  components: {
    Item,
  }
});
</script>