<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NasaService } from "@/services/Nasa.service";
import { IEpic } from "@/models/EpicModel.interface";

@Component
export default class extends Vue {
  private epicService = new NasaService();
  epic: IEpic[] = [];

  immage = "";

  getEpicDetails() {
    this.epicService
      .getEpic(this.$route.params.id)
      .then((response) => {
        this.epic = response;
      })
      .catch((err) => console.log(err));
  }

  getImage(index: number) {
    this.immage = `https://api.nasa.gov/EPIC/archive/natural/${this.$route.params.id.split("-").join("/")}/png/${
      this.epic[index].image
    }.png?api_key=aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG`;
    return this.immage;
  }

  created() {
    this.getEpicDetails();
  }
}
</script>

<template>
  <div>
    <v-container>
      <v-row class="card-row text-center">
        <div class="card-selection">
          <v-card
            class="card mx-auto transparent opacity-0"
            max-width="400"
            v-for="(item, idx) in epic.length"
            v-bind:key="item"
          >
            <v-img class="card-item" :src="getImage(idx)" height="200px" v-bind:alt="item.image"></v-img>
            <v-card-title class="card-title">
              <span class="card-title-span">Coordinate: </span>
              {{ epic[idx].centroid_coordinates }}
            </v-card-title>
            <v-card-title class="card-title">
              <span class="card-title-span">Sun Position: </span>
              {{ epic[idx].sun_j2000_position }}
            </v-card-title>
            <v-card-title class="card-title">
              <span class="card-title-span">Lunar Position: </span>
              {{ epic[idx].lunar_j2000_position }}
            </v-card-title>
            <v-card-title class="card-title">
              <span class="card-title-span-date">Date:{{ epic[idx].date }} </span>
            </v-card-title>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.card-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}
.detail-card {
  margin-top: 80px;
}

.card {
  background-color: red;
  color: wheat;
  padding: 50px;
  border: none;
  margin: 20px 0 0 0;
  .card-item {
    background-color: transparent;
    border: none;
    padding: 5px;
    border-radius: 10px;
  }
}
.card-title {
  background-color: gainsboro;
  border-radius: 10px;
  opacity: 0.6;
  color: #0b3d91;
  margin-bottom: 10px;
  margin-top: 10px;
  .card-title-span {
    color: #f44336;
    font-weight: bold;
  }
  .card-title-span-date {
    color: #242406;
    font-weight: bold;
  }
}
</style>
