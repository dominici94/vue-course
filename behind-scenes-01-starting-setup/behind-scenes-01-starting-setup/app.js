const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("upated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount("#app");
}, 3000);

//////////////////////////////////////////////

const data = {
  message: "Ciaooo!",
  longMessage: "Ciaoooo Mondooooo!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "setting proxy!";
    }
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!";

// console.log(data.longMessage);
// console.log(proxy.longMessage);

const app2 = Vue.createApp({
  template: `
    <p>{{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
}).mount("#app2");
