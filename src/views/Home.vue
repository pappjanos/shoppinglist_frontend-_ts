<template>
  <v-container class="d-flex justify-center">
    <v-sheet color="white" elevation="1" width="500" class="pa-5">
      <ProductList :products="products.results" />
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import ProductList from "@/components/ProductList.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: { ProductList },
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("products", ["products"]),
  },
  methods: {
    ...mapActions("products", ["getAllProducts"]),
  },
  async mounted() {
    if (this.user.isLoggedIn) {
      await this.getAllProducts();
    }
  },
});
</script>
