<template>
  <v-card class="selection-card" outlined tile>
      <h2 class="selection-card-title">TECHPORT</h2>
      <img
          src="@/assets/5052744416_353f737db7_o.jpg"
          alt="Vuetify Logo"
          class="apod-img"
          width="100%"
          height="100%"
          @click="showTechport"
      />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TechportCardComponent extends Vue {
  showTechport() {
      this.$router.push("/techport");
  }
}
</script>

<style scoped lang="scss">
.selection-card{
  background-color: transparent;
  color: wheat;
  padding: 10px;
  border: none;
  .selection-card-title {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.0075em;
      color: wheat;
      margin-bottom: 20px;
  }
  .apod-img {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
      transform: scale(1.1);
      transition: all 0.8s ease;
      cursor: pointer;
      box-shadow: 0 0 10px 20px rgba(0, 0, 0, 0.5);
  }
}
}
</style>
