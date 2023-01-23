<template>
  <v-card class="product-card" color="#ececec" elevation="0">
    <v-card-text style="text-align: center">
      <v-form v-model="form" ref="form" @submit.prevent="saveProduct()">
        <h1>Header Text</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</p>
        <div>
          <v-text-field v-for="(field, i) in newProductFields" :key="i" v-model="productData[field.model]"
            :type="field.type" variant="plain" class="text-field" :label="field.label"
            :rules="[v => !!v || `${field.label} is required`]"></v-text-field>
        </div>
        <v-btn :disabled="!form" type="submit" color="black" block size="x-large">{{ !onEditProduct ? 'Create' : 'Save'
        }}</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

const productsStore = useProductsStore();
const { newProductFields, productData, onEditProduct } = storeToRefs(productsStore);
const form = ref(false);


type VFormRef = {
  id: number | string;
  validate: () => Promise<string[]>;
  reset: () => void;
  resetValidation: () => void;
};


const saveProduct = async () => {
  if (!onEditProduct.value) {
    await productsStore.createProduct();
  } else {
    await productsStore.saveEditedProduct();
  }
}

</script>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "~~/stores/products";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "product-card-form",
});
</script>

<style lang="scss" scoped>
.product-card {
  padding: 2rem 1.5rem;

  h1 {
    margin-bottom: 2rem;
  }

  p {
    color: var(--font-color);
    font-size: 1.2em;
    width: 80%;
    margin: 0 auto 2rem;
  }

  .text-field {
    background-color: #ffff;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
}
</style>
