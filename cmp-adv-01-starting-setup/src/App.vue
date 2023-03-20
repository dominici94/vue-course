<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <!-- <base-card> -->
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- </base-card> -->
    <course-goal>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["anotherProp"] }}</p>
      </template>
    </course-goal>
    <button @click="setComponent('active-goals')">Active Goals</button>
    <button @click="setComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
// import BaseCard from "./components/BaseCard.vue";
import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    "badge-list": BadgeList,
    "user-info": UserInfo,
    CourseGoal,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "manage-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
