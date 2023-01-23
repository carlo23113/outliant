<template>
  <section>
    <v-row>
      <v-col cols="12" lg="4">
        <div id="left">
          <h2>Header Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            rhoncos dolor purus non enim dolor.
          </p>
        </div>
      </v-col>
      <v-col cols="12" lg="4">
        <div id="middle">
          <div id="large-box"></div>
        </div>
      </v-col>
      <v-col cols="12" lg="4">
        <div id="right">
          <div id="right-container">
            <h2>Header Text</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor rhoncos dolor purus non enim dolor.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "second-section",
});
</script>

<style lang="scss" scoped>
section {

  p {
    font-size: 1.2em;
    color: var(--font-color);
  }

  #large-box {
    height: 25rem;
    width: 100%;
    background-color: var(--image-primary);
    margin: auto;
  }

  #right {
    height: 100%;
    position: relative;

    #right-container {
      position: absolute;
      bottom: 0;
    }
  }
}

@media (max-width: 1280px) {
  #right-container {
    position: initial !important;
  }
}

@media (max-width: 768px) {
  #large-box {
    height: 70vw !important;
  }
}
</style>
