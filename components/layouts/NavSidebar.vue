<template>
  <v-navigation-drawer v-model="drawer" temporary border="none" width="270" color="#FFFFFF">
    <div id="logo-container">
      <v-btn icon size="small" elevation="0" @click="toggleSidebar()">
        <v-icon size="x-large">mdi-menu</v-icon>
      </v-btn>
      <div>
        <span>Logo</span>
      </div>
    </div>

    <v-list density="compact" color="black" nav>
      <v-list-subheader>Menu</v-list-subheader>
      <div v-for="(nav, i) in navLinks" :key="i">
        <v-list-item :title="nav.title" :to="nav.route" @click.stop="$emit('click', nav)">
        </v-list-item>
      </div>
      <v-list-item class="mt-4">
        <v-btn color="black" size="small">Call to action</v-btn>
      </v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>


<script setup lang="ts">
const layoutStore = useLayoutStore();
const { drawer, isMobileView, navLinks } = storeToRefs(layoutStore);

onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", () => {
      if (window.outerWidth < 1024) {
        isMobileView.value = true;
      } else {
        isMobileView.value = false;
      }
    });
  });
});

const toggleSidebar = () => {
  drawer.value = !drawer.value;
};

</script>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from "vue";
import { useLayoutStore } from "~~/stores/layout";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "nav-sidebar",
});
</script>

<style lang="scss" scoped>
#logo-container {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    #logo {
      max-width: 40%;
      max-height: 2rem;
      margin-left: 1.5rem;
    }

    span {
      font-size: 1.2em;
      font-weight: 600;
      font-weight: bold;
    }
  }
}
</style>
