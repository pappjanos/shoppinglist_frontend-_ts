<template>
  <div align="center"><h1>Email verification...</h1></div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  methods: {
    ...mapActions("user", ["verifyEmail"]),
  },
  mounted: function () {
    this.verifyEmail(this.$route.query.token);
  },
});
</script>

<style></style>
