<template>
  <div>home</div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import BlogList from "@/components/BlogList.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: { BlogList },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("blog", ["getBlogEntries"]),
  },
  async created() {
    /*
    if (this.user.isloggedIn) {
      await this.getBlogEntries(this.user.id);
    }
    */
  },
});
</script>
