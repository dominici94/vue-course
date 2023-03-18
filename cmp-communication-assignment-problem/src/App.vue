<template>
  <div class="container">
    <active-user :userName="user.name" :userAge="user.age"></active-user>
    <user-data @get-data="getData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: null,
      },
    };
  },
  methods: {
    getData(name, age) {
      this.user.name = name;
      this.user.age = age;
    },
  },
};
</script>
