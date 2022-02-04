<template>
  <v-app>
    <v-main>
      {{ helloMessage }} {{ username }}
      <div>
        {{ getUserInfo }}
      </div>
      <v-container fluid class="px-10">
        <router-view />
      </v-container>
      <Snackbar />
    </v-main>
    <v-footer app color="primary" dark> All rights reserved 2021 </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Snackbar from "@/components/general/Snackbar.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",
  components: {
    Snackbar,
  },
  computed: {
    helloMessage: {
      get(): string {
        return this.$store.state.user.username;
      },
    },
    ...mapGetters("user", ["getUserInfo"]),
  },
  data: () => ({
    //
  }),
});
</script>
