const app = Vue.createApp({
  data() {
    return {
      output: "",
      outputEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("mostra alert al click");
    },
    registerInput(event) {
      this.output = event.target.value;
    },
    registerInputEnter(event) {
      this.outputEnter = event.target.value;
    },
  },
}).mount("#assignment");
