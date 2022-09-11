<template>
    <v-container class="tech-selection">
        <v-row class="tech-row">
            <h2 class="tech-header">
                Welcome to TechPort - NASA's resource for collecting and sharing
                information about NASA-funded technology development.
            </h2>
            <v-data-table
                :headers="headers"
                :items="techport"
                hide-default-footer
                :items-per-page="10"
                class="data-table elevation-1"
                dark
                loading="true"
            >
                <template v-slot:item.img_src="{ item }">
                    <v-chip :color="getColor(item.img_src)" dark>
                        {{ item.img_src }}
                    </v-chip>
                </template>
            </v-data-table>
        </v-row>
        <h2 class="tech-header">Mars Rover Photos</h2>
        <v-row class="photos-row">
            <div v-for="(i, idx) in 4" :key="i">
                <img
                    class="mars-photos"
                    :src="techport[idx].img_src"
                    alt=""
                    width="300"
                    height="300"
                />
            </div>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NasaTechportService } from "@/services/NasaTechport.service";
import { ITechport } from "@/models/TechportModel.interface";

@Component
export default class TechportView extends Vue {
    headers = [
        { text: "Name", align: "start", sortable: true, value: "id" },
        { text: "Id", value: "id" },
        { text: "Sol", value: "sol" },
        { text: "Camera", value: "camera" },
        { text: "Earth Date", value: "earth_date" },
        { text: "Rover", value: "rover" },
        { text: "Image", value: "img_src" },
    ];

    getColor(img_src) {
        if (img_src.length > 60) return "green";
        else if (img_src.length > 20) return "orange";
        else return "red";
    }

    private techportService = new NasaTechportService();
    techport = [] as ITechport[];

    getTechportDetails() {
        this.techportService.getTechport().then((response) => {
            this.techport = response.photos;
            /* console.log(this.techport);
            console.log(this.techport[0].camera.full_name); */
        });
    }

    mounted() {
        this.getTechportDetails();
    }
}
</script>

<style lang="scss" scoped>
.tech-header {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tech-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    .data-table {
        margin: 20px auto;
        background-color: #0b3c918c;
        opacity: 0.8;
        border-radius: 10px;
    }
}
.photos-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    padding: 10px;
}
.mars-photos {
    margin: 10px;
    border-radius: 10px;
    &:hover {
        transform: scale(1.1);
        transition: all 0.8s ease;
        cursor: pointer;
        box-shadow: 0 0 10px 20px rgba(0, 0, 0, 0.5);
    }
}
</style>
