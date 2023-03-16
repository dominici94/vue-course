const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(value) {
      console.log("method evaluated...");

      this.number += value;
      console.log(this.number);
    },
  },
  computed: {
    getResult() {
      console.log("computed evaluated...");

      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much!";
      } else {
        return this.number;
      }
    },
  },
  watch: {
    getResult() {
      console.log("watcher evaluated...");

      const self = this;
      setTimeout(function () {
        self.number = 0;
      }, 5000);
    },
  },
}).mount("#assignment");
