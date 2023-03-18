<template>
  <div>
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="userName" />
    </div>
    <div>
      <label for="age">Age:</label>
      <input id="age" type="text" v-model="userAge" />
    </div>
    <button @click="$emit('get-data', userName, userAge)">Confirm</button>
  </div>
</template>

<script>
export default {
  emits: ["get-data"],
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
};
</script>
