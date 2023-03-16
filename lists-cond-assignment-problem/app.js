const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      visible: true,
      visibleText: "Hide",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
    toggleVisibilityList() {
      this.visible = !this.visible;
      if (this.visible) {
        this.visibleText = "Hide";
      } else {
        this.visibleText = "Show";
      }
    },
  },
}).mount("#assignment");
