<template>
  <v-table class="table">
    <thead class="table-head">
      <tr>
        <th v-for="(header, i) in headers" :key="i" class="text-left">
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(d, index) in data" :key="index">
        <td
          v-for="(header, h) in headers"
          :key="h"
          :class="!index ? 'no-border-top' : 'bordered'"
        >
          <div v-if="header.value !== 'action'">
            {{ d[header.value] }}
          </div>
          <div class="buttons" v-else>
            <v-btn color="black" @click="$emit('edit', d)">Edit</v-btn>
            <v-btn variant="outlined" @click="$emit('delete', d)">Delete</v-btn>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
defineProps<{
  headers: Headers[];
  data: Array<any>;
}>();
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { Headers } from "~~/types";

export default defineComponent({
  name: "Table",
});
</script>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  text-align: center;

  td,
  th {
    font-size: 1.2em !important;
    text-align: center !important;
  }

  td {
    max-width: 4rem;
    color: var(--font-color);
  }

  .no-border-top {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  .bordered {
    border: 1px solid black;
  }

  th {
    background-color: var(--secondary-bg-color);
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-top: 2px solid black;
  }

  th:nth-child(1),
  td:nth-child(1) {
    border-left: 2px solid black;
  }
  th:nth-child(3),
  td:nth-child(3) {
    border-right: 2px solid black;
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }
}
</style>
