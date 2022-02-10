<template>
  <div>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </div>
    </div>
    <div class="pt-10" align="center" v-else>
      No any product yet in your list!
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import Vue from "vue";

export default Vue.extend({
  props: {
    products: Array,
  },
  components: { ProductItem },
});
</script>

<style></style>
