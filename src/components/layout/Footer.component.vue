<template>
  <v-card flat tile class="indigo lighten-1 white--text text-center" style="background-color: #1e1e1e !important">
    <v-card-text> </v-card-text>
    <v-card-text class="white--text pt-0"
      >The National Aeronautics and Space Administration is America’s civil space program and the global leader in space
      exploration.
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text class="white--text"> {{ new Date().getFullYear() }} — <strong>NASA</strong> </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  name: "Header",
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss"></style>