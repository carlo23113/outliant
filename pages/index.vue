<template>
  <div id="home-page">
    <HomeFirstSection></HomeFirstSection>
    <HomeSecondSection></HomeSecondSection>
    <HomeThirdSection></HomeThirdSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home-page",
});
</script>

<style lang="scss" scoped>
#home-page {
  height: 100%;
}

section {
  margin-bottom: 10rem;
}

@media (max-width: 1024px) {
  section {
      margin-bottom: 5rem;
    }
}
</style>