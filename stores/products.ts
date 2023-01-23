import { defineStore } from "pinia";
import { Headers } from "~~/types";
import { Product } from "~~/types/products";

export const useProductsStore = defineStore("products", {
  state: () => ({
    headers: headers as Headers[],
    products: [] as Product[],
    deleteModal: false,
    onEditProduct: false,
    productData: {
      id: null,
      name: "",
      price: null,
    } as Product | any,
    newProductFields: [
      {
        label: "Name",
        model: "name",
        type: "text",
      },
      {
        label: "Price",
        model: "price",
        type: "number",
      },
    ],
  }),
  actions: {
    async createProduct() {
      await this.products.push({
        id: !this.products.length ? 1 : this.products.length + 1,
        name: this.productData.name,
        price: this.productData.price,
      });

      this.resetForm();
    },
    editProduct(product: Product) {
      this.onEditProduct = true;
      this.productData = {
        id: product.id,
        name: product.name,
        price: product.price
      };
    },
    async saveEditedProduct() {
      const updatedProduct = await this.products.map((product) => {
        if (product.id === this.productData.id) {
          product = Object.assign(this.productData);
        }
        return product;
      });
      this.products = updatedProduct;
      this.onEditProduct = false;
      this.resetForm();
    },
    async deleteProduct(product: Product) {
      this.products = await this.products.filter(p => p.id !== product.id);
      this.deleteModal = false;
    },
    resetForm() {
      this.productData = {
        id: null,
        name: "",
        price: null,
      };
    },
  },
  getters: {},
});

const headers: Headers[] = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Action",
    value: "action",
  },
];
