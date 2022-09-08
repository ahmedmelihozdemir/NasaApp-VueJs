<template>
    <div>
        <v-container>
            <v-row class="card-row text-center">
                <div class="card-selection">
                    <v-card
                        class="card mx-auto transparent opacity-0"
                        max-width="400"
                        v-for="(item, idx) in items"
                        :key="item"
                    >
                        <v-img
                            class="card-item"
                            :src="item.src"
                            height="200px"
                        ></v-img>
                        <v-card-title class="card-title">
                            <span class="card-title-span">Coordinate: </span>
                            {{ epic[idx].centroid_coordinates }}
                        </v-card-title>
                        <v-card-title class="card-title">
                            <span class="card-title-span">Sun Position: </span>
                            {{ epic[idx].sun_j2000_position }}
                        </v-card-title>
                        <v-card-title class="card-title">
                            <span class="card-title-span"
                                >Lunar Position:
                            </span>
                            {{ epic[idx].lunar_j2000_position }}
                        </v-card-title>
                        <v-card-title class="card-title">
                            <span class="card-title-span-date"
                                >Date:{{ epic[idx].date }}
                            </span>
                        </v-card-title>
                    </v-card>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NasaService } from "@/services/Nasa.service";
import { IEpic } from "@/models/EpicModel.interface";

@Component
export default class extends Vue {
    colors = ["red", "blue"];
    cycle = false;
    dates = ["First", "Second"];
    items = [
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
    ];

    private epicService = new NasaService();
    epic = [] as IEpic[];

    getEpicDetails() {
        this.epicService.getEpic().then((response) => {
            this.epic = response;
        });
    }

    mounted() {
        this.getEpicDetails();
    }
}
</script>

<style lang="scss">
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
