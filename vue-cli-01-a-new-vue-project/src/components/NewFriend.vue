<template>
  <form>
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="newFriend.name" />
    </div>

    <div>
      <label for="phone">Phone:</label>
      <input id="phone" type="text" v-model="newFriend.phone" />
    </div>

    <div>
      <label for="email">Email:</label>
      <input id="email" type="tel" v-model="newFriend.email" />
    </div>

    <!-- <label for="favorite">Is favorite</label>
    <input id="favorite" type="checkbox" /> -->

    <button @click.prevent="exportFriend">Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["import-friend"],
  data() {
    return {
      newFriend: {
        id: "",
        name: "",
        phone: "",
        email: "",
        favorite: false,
      },
    };
  },
  methods: {
    exportFriend() {
      this.$emit(
        "import-friend",
        this.newFriend
        // .name,
        // this.newFriend.phone,
        // this.newFriend.email
      );
    },
  },
};
</script>
