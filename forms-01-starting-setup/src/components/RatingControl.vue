<template>
  <ul>
    <li :class="{ active: modelValue === 'scarso' }">
      <button type="button" @click="activate('scarso')">scarso</button>
    </li>
    <li :class="{ active: modelValue === 'medio' }">
      <button type="button" @click="activate('medio')">medio</button>
    </li>
    <li :class="{ active: modelValue === 'buono' }">
      <button type="button" @click="activate('buono')">buono</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   },
  // },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: purple;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
