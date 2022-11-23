<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NasaService } from "@/services/Nasa.service";
import { IEpic } from "@/models/EpicModel.interface";
var moment = require('moment');


@Component
export default class EpicView extends Vue {
  private epicService = new NasaService();
  imageUrl: string[] = [];

  dates(index: number): void {
    let week = new Array();
    let current = moment().subtract(1, "months");
    for (let i = 0; i < 7; i++) {
      week.push(current.format("YYYY-MM-DD"));
      current = current.subtract(1, "days");
    }
    return week[index];
  }

  getApodImages(index: number) {
    let currentMonth = moment().subtract(1, "months");
    let currentDay = moment(currentMonth).subtract(index + 1, "days");

    this.epicService
      .getApod(currentDay.format("YYYY-MM-DD"))
      .then((response) => {
        this.imageUrl.push(response.hdurl);
        index += 1;
        if (index < 7) {
          this.getApodImages(index);
        }
      })
      .catch((err) => console.log(err));
  }

  openEpics(i: any) {
    this.$router.push("/epic-detail/" + this.dates(i));
  }

  created() {
    this.getApodImages(0);
  }
}
</script>

<template>
  <div>
    <v-container class="epic-container">
      <v-row class="epic-row">
        <v-card
          class="epic-card mx-auto transparent"
          max-width="344"
          v-for="(i, idx) in 7"
          :key="i"
        >
          <v-img
            :src="imageUrl[idx]"
            height="200px"
            @click="openEpics(idx)"
          ></v-img>
          <v-card-title class="card-title">
            {{ dates(idx) }}
          </v-card-title>
          <!-- <v-card-subtitle class="card-subtitle">
          </v-card-subtitle> -->
        </v-card>
      </v-row>
    </v-container>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.epic-container {
  margin: 4rem auto;
  display: flex;
  .epic-row {
    padding: 10px;
    margin: 10px;
  }
  .epic-card {
    margin: 10px;
    &:hover {
      transform: scale(1.08);
      transition: all 0.6s ease-in-out;
      cursor: pointer;
    }
    .card-title {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.0095em;
      margin: 0.5rem 0 0.5rem;
      color: #dc3329;
      display: flex;
      justify-content: center;
      &:hover {
        background-color: #0b3c918c;
        border-radius: 10px;
      }
    }
    .card-subtitle {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      margin: 0.5rem 0 0.5rem;
      color: wheat;
      display: flex;
      justify-content: center;
    }
  }

  .epic-carousel {
    width: 100%;
    height: 80px;
    &:hover {
      cursor: pointer;
    }
    .epic-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.card-title {
  color: wheat;
  font-weight: bold;
}

.date {
  font-size: 1.2rem;
  padding: 20px;
  background-color: transparent;
  color: #0b3d91;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.1);
    transition: all 0.8s ease;
    cursor: pointer;
  }
}
</style>
