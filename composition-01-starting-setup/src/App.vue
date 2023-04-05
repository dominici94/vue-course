<template>
  <section class="container">
    <!-- <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3> -->
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :age="uAge"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
// import { ref, reactive, isReactive, isRef } from 'vue';
import { ref, reactive, computed, watch } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Maximilian');
    // // const uName = 'Maximilian';
    const uAge = ref(31);
    const user = reactive({
      name: 'Maximilian',
      age: 31,
    });

    const firstName = ref('');
    const lastName = ref('');
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch(uAge, function (newValue, oldValue) {
      console.log('Old age: ' + oldValue);
      console.log('New age: ' + newValue);
    });

    // console.log(isRef(uAge));
    // console.log(isReactive(user), user.age);

    // setTimeout(function () {
    //   uName.value = 'Max';
    //   uAge.value = 32;
    // }, 2000);

    // setTimeout(function () {
    //   // user.value.name = 'Max';
    //   // user.value.age = 32;
    //   user.name = 'Max';
    //   user.age = 32;
    // }, 2000);

    function setNewAge() {
      uAge.value = 33;
    }

    return {
      // userName: user.value.name,
      // age: user.value.age,
      user: user,
      setAge: setNewAge,
      uName,
      firstName,
      lastName,
      uAge,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
