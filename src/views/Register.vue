<template>
  <v-card width="600px" class="mx-auto">
    <v-form
      v-model="valid"
      lazy-validation
      ref="form"
      @submit.prevent="onSubmit"
    >
      <v-container>
        <v-card-title>
          <v-row>
            <v-col cols="12"> Register </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :rules="[rules.required, rules.email]"
                v-model="email"
                label="E-mail"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                label="Password"
                @click:append="showPass = !showPass"
                counter
                hint="At least 8 characters"
                :rules="[rules.required, rules.min]"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="12">
              <v-btn
                :loading="loading"
                :disabled="!valid || loading"
                type="submit"
              >
                Register
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "Register",
  methods: {
    ...mapActions("user", ["register"]),
    onSubmit() {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        this.loading = true;
        this.register({
          email: this.email,
          password: this.password,
        });
        this.loading = false;
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      valid: true,
      showPass: false,
      loading: false,
      rules: {
        required: (value: string) => !!value || "Required.",
        min: (v: string) => v.length >= 8 || "Min 8 characters",
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
});
</script>

<style></style>
