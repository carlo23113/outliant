<template>
  <v-app-bar :elevation="0" height="100">
    <div style="width: 100%">
      <div class="app-bar" v-if="isMobileView">
        <v-btn icon size="small" elevation="0" @click="toggleSidebar()">
          <v-icon size="x-large">mdi-menu</v-icon>
        </v-btn>
      </div>
      <div class="app-bar" v-else>
        <div id="title"><nuxt-link to="/" style="text-decoration: none; color: black">Logo</nuxt-link></div>
        <div id="nav-links">
          <v-btn v-for="link in navLinks" :key="link.id" :to="link.route">{{ link.title }}</v-btn>
        </div>
        <div>
          <v-btn id="call-to-action-btn" color="black" size="large">Call to Action</v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLayoutStore } from "~~/stores/layout";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "app-bar",
});
</script>

<script setup lang="ts">
const layoutStore = useLayoutStore();
const { drawer, isMobileView, navLinks } = storeToRefs(layoutStore);

const toggleSidebar = () => {
  drawer.value = !drawer.value;
};

</script>

<style scoped>
#title {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
}

.app-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--container-padding-x);
}

#nav-links {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

#call-to-action-btn {
  background-color: black;
  color: white !important;
}

@media (max-width: 426px) {
  #app-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 0.5rem;
  }
}
</style>
