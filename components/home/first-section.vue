<template>
  <section>
    <v-row>
      <v-col cols="12" lg="5" md="5" sm="8" id="left">
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
        </div>
        <div id="buttons">
          <v-btn color="black" size="large">Call to Action</v-btn>
          <v-btn variant="outlined" size="large">See Workspace</v-btn>
        </div>
      </v-col>
      <v-col cols="12" lg="7" md="7" sm="12" id="right">
        <div id="boxes">
          <div id="large-box"></div>
          <div id="small-box"></div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "first-section",
});
</script>

<style lang="scss" scoped>
section {
  #left {
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 4vw, 3rem);
    width: 100%;

    h1 {
      font-size: clamp(2.5em, 4vw, 4em);
      line-height: 1.3;
      margin-bottom: clamp(0px, 4vw, 1.5rem);
    }

    p {
      font-size: 1.2em;
      color: var(--font-color);
    }

    #buttons {
      display: flex;
      gap: 1rem;
    }
  }

  #right {
    height: 100%;
    padding-top: 3%;

    #boxes {
      position: relative;
      height: 35vw;
      width: 35vw;
      margin-left: auto;

      #large-box {
        background-color: var(--image-primary);
        height: 80%;
        width: 80%;
        position: absolute;
        bottom: 0;
      }

      #small-box {
        background-color: var(--image-secondary);
        height: 50%;
        width: 50%;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
}

@media (max-width: 960px) {
  #left {
    margin-bottom: 2rem;
  }

  #boxes {
    height: 50vw !important;
    width: 50vw !important;
    margin: auto
  }
}

@media (max-width: 768px) {

  #boxes {
    height: 60vw !important;
    width: 60vw !important;
    margin: auto
  }
}

@media (max-width: 620px) {
  #buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 426px) {

  #boxes {
    height: 80vw !important;
    width: 80vw !important;
    margin-left: 0;
  }
}
</style>
