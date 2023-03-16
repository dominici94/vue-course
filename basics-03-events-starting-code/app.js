const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    increment(number) {
      this.counter += number;
    },
    decrement(number) {
      this.counter -= number;
    },
    submitForm(event) {
      // event.preventDedault;
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
      this.confirmedName = "";
    },
  },
});

app.mount("#events");
