<template>
  <div>
    <div style="margin-bottom: 5rem">
      <v-row>
        <v-col cols="12" lg="6">
          <div id="header">
            <h1>Products</h1>
            <v-text-field v-model="search" rounded variant="outlined" label="Search for keywords..."
              hide-details></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6">
          <table-component :headers="headers" :data="updatedProducts" @edit="editProduct"
            @delete="deleteProduct"></table-component>
          <div v-if="!updatedProducts.length" id="no-data">
            <img :src="noDataSvg" width="200" />
            <p>No Data</p>
          </div>
        </v-col>
        <v-col cols="12" lg="1"></v-col>
        <v-col cols="12" lg="5">
          <ProductCardForm id="card"></ProductCardForm>
        </v-col>
      </v-row>
    </div>
    <HomeThirdSection></HomeThirdSection>
    <v-dialog v-model="deleteModal" width="400">
      <v-card>
        <v-card-text> Are you sure you want to delete product {{ selectedProduct.name }}. </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="deleteModal = false">Cancel</v-btn>
          <v-btn style="background-color: red; color: white" @click="submitDeleteProduct()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const productsStore = useProductsStore();
const { headers, products, deleteModal } = storeToRefs(productsStore);

const search = ref("");

const selectedProduct: Ref<Product> = ref({
  id: null,
  name: "",
  price: null
})

const updatedProducts = computed(() => {
  return search.value.length
    ? products.value.filter((product: Product) => searchProduct(product))
    : products.value.filter((product: Product) => product);
});

const searchProduct = (product: Product) => {
  return (
    product.name?.toLowerCase().includes(search.value.toLowerCase())
  );
};

const editProduct = (product: Product) => {
  productsStore.editProduct(product);
};

const deleteProduct = (product: Product) => {
  deleteModal.value = true;
  selectedProduct.value = product;
};

const submitDeleteProduct = () => {
  productsStore.deleteProduct(selectedProduct.value);
}
</script>

<script lang="ts">
import { defineComponent, Ref } from "vue";
import { Table as TableComponent } from "~~/components/common";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";
import { Product } from "~~/types/products";
import noDataSvg from "@/assets/images/no-data.png"

export default defineComponent({
  name: "products-page",
});
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  gap: 5rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 3em;
  }
}

#no-data {
  display: grid;
  place-content: center;
  text-align: center;
  height: 100%;

  p {
    font-size: 2em;
    font-weight: bold;
    color: gray;
    margin-top: 1rem;
  }
}
</style>
