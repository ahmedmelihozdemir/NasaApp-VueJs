<template>
    <div>
        <v-container>
            <v-row class="card-row text-center">
                <div class="card-selection">
                    <v-card
                        class="card mx-auto transparent opacity-0"
                        max-width="400"
                        v-for="(item, idx) in 10"
                        :key="item"
                    >
                        <v-img
                            class="card-item"
                            :src="getImage(idx)"
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
/* import { IEpicImage } from "@/models/EpicModelImages.interface"; */

@Component
export default class extends Vue {
    items = [
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906074843.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906060041.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906041238.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906022436.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906003634.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906093645.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906112447.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906131250.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906150052.png?api_key=DEMO_KEY",
        },
        {
            src: "https://api.nasa.gov/EPIC/archive/natural/2022/09/06/png/epic_1b_20220906164855.png?api_key=DEMO_KEY",
        },
    ];

    dates(index: number): void {
        let week = new Array();
        let current = moment().subtract(1, "days");
        for (let i = 0; i < 10; i++) {
            week.push(current.format("YYYY/MM/DD"));
            current = current.subtract(1, "days");
        }
        return week[index];
    }

    private epicService = new NasaService();
    epic = [] as IEpic[];

    immage: string = "";
    immageDate: string = "";
    immageEpicImage: string = "";

    getEpicDetails() {
        this.epicService.getEpic().then((response) => {
            this.epic = response;
        });
    }

    getImage(index: number) {
        this.immageDate = this.dates(1);
        this.immageEpicImage = this.epic[0].image;
        this.immage = `https://api.nasa.gov/EPIC/archive/natural/${this.immageDate}/png/${this.immageEpicImage}.png?api_key=aaMInSluWQ32vsNqeLEaiqqzhAoAJK4J1Scxj1GG`;
        /* console.log(this.epic); */
        return this.immage;
    }

    mounted() {
        this.getEpicDetails();
        this.dates(0);
        this.getImage(0);
    }
}
</script>

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
