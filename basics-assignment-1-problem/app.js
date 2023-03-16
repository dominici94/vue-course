const app = Vue.createApp({
  data() {
    return {
      name: "Mattia",
      age: 28,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
