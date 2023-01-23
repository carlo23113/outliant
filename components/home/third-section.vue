<template>
  <section>
    <v-row>
      <v-col cols="12" lg="6" id="left">
        <div id="large-box"></div>
      </v-col>
      <v-col cols="12" lg="6">
        <div id="right">
          <div id="right-container">
            <div>
              <h1>Lorem ipsum dolor sit consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                purus sit amet luctus venenatis, lectus
              </p>
            </div>
            <div>
              <v-btn color="black" size="large">Call to Action</v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "third-section",
});
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 4rem;

  #left {
    #large-box {
      background-color: var(--image-primary);
      width: 90%;
      height: 30rem;
    }
  }

  #right {

    position: relative;
    height: 100%;

    #right-container {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: clamp(1.5rem, 4vw, 3rem);
      bottom: 4rem;

      h1 {
        font-size: clamp(2.5em, 4vw, 4em);
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2em;
        color: var(--font-color);
      }
    }
  }
}

@media (max-width: 768px) {
  #large-box {
    width: 100% !important;
  }
}

@media (max-width: 426px) {

  #large-box {
      height: 20rem !important;
    }
}


@media (max-width: 1280px) {
  #right-container {
    position: initial !important;
  }
}
</style>
