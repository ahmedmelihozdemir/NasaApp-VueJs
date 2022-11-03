<template>
  <v-app class="navbar">
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import FooterComponent from "./components/layout/Footer.component.vue";

export default Vue.extend({
  name: "Home",

  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style scoped lang="scss">
div[data-app="true"] {
  background: url("@/assets/earth-slide.jpeg") no-repeat center center fixed;
  background-size: cover;
}
</style>
