<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-if="!user.isLoggedIn" to="/login">
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!user.isLoggedIn" to="/register">
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user.isLoggedIn" @click="logout">
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <v-btn icon to="/">
          <v-icon> mdi-cart </v-icon>
        </v-btn>
        Shopping list
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="hidden-md-and-up" icon @click="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <v-btn
        v-if="!user.isLoggedIn"
        class="hidden-sm-and-down"
        text
        to="/login"
      >
        login
      </v-btn>

      <v-btn
        v-if="!user.isLoggedIn"
        class="hidden-sm-and-down"
        text
        to="/register"
      >
        register
      </v-btn>

      <v-btn
        v-if="user.isLoggedIn"
        class="hidden-sm-and-down"
        text
        to="/profile"
      >
        profile
      </v-btn>

      <v-btn
        v-if="user.isLoggedIn"
        class="hidden-sm-and-down"
        text
        @click="logout"
      >
        logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <div>
        {{ user }}
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
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "App",
  components: {
    Snackbar,
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["logout", "reloadUserFromLocalStorage"]),
  },
  data: () => ({
    drawer: false,
  }),
  created() {
    this.reloadUserFromLocalStorage();
  },
});
</script>
