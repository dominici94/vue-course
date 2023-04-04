<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 class="goal">{{ courseGoal }}</h3>
  <!-- <h4>{{ visibility }}</h4> -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const myGoal = ref('Learn Vue');
    let visible = true;

    function toggleGoal() {
      // console.log(visible.value);
      if (visible) {
        document.querySelector('.goal').style.opacity = 0;
      } else {
        document.querySelector('.goal').style.opacity = 1;
      }
      visible = !visible;
    }

    return {
      courseGoal: myGoal.value,
      // visibility: visible.value,
      toggle: toggleGoal,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
