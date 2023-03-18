<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </div>
</template>

<script>
export default {
  props: ["userName", "userAge"],
};
</script>
