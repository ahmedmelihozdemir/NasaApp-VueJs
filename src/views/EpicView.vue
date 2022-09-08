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
                        :src="items[i]"
                        height="200px"
                        @click="openEpics(idx)"
                    ></v-img>
                    <v-card-title class="card-title">
                        {{ dates(idx) }}
                    </v-card-title>
                    <v-card-subtitle class="card-title">
                        {{ epic[idx].caption }}
                    </v-card-subtitle>
                </v-card>
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
export default class EpicView extends Vue {
    path = "";
    model = 0;
    show = [false, false, false, false, false, false, false];
    items = [
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
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

    dates(index: number): void {
        let week = new Array();
        let current = moment().subtract(1, "days");
        for (let i = 0; i < 7; i++) {
            week.push(current.format("DD.MM.YY"));
            current = current.subtract(1, "days");
        }
        return week[index];
    }

    openEpics(i: any) {
        this.$router.push("/epic-detail/" + this.dates(i));
    }
}
</script>

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

