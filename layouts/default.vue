<template>
  <v-layout style="height: 100vh; width: 100vw">
    <layouts-nav-sidebar></layouts-nav-sidebar>
    <layouts-app-bar></layouts-app-bar>
    <v-main>
      <div id="content">
        <slot></slot>
      </div>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "default",
});
</script>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
#content {
  padding: var(--container-padding);
  width: 100%;
  // background-color: var(--primary-bg-color);
  height: 100%;
}
</style>
