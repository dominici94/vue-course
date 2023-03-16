const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      visible: true,
      color: "",
    };
  },
  computed: {
    prova() {
      return { visible: this.visible, hidden: !this.visible };
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
}).mount("#assignment");
