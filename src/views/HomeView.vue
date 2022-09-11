<template>
    <div>
        <v-container class="selection-container lighten-5 mb-6">
            <v-row class="selection-row">
                <v-col class="selection-cards col-md-4">
                    <EpicCardComponent></EpicCardComponent>
                </v-col>
                <v-col class="selection-cards col-md-4">
                    <EpicCardComponent></EpicCardComponent>
                </v-col>
                <v-col class="selection-cards col-md-4">
                    <TechportCardComponent></TechportCardComponent>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import EpicCardComponent from "@/components/layout/EpicCardComponent.vue";
import TechportCardComponent from "@/components/layout/TechportCardComponent.vue";

@Component({
    components: {
        EpicCardComponent,
        TechportCardComponent,
    },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.selection-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover {
        transform: scale(1.1);
        transition: all 0.8s ease;
        cursor: pointer;
    }
    .selection-row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        max-width: 1000px;
    }
    .selection-cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        .card {
            background-color: transparent;
            color: wheat;
            padding: 10px;
            border: none;
            .card-title {
                font-size: 1.5rem;
                font-weight: 300;
                line-height: 1.2;
                letter-spacing: -0.0075em;
                margin: 1.5rem 0 2rem;
                color: wheat;
                display: flex;
                justify-content: center;
            }
            .select-title {
                font-size: 1.5rem;
                font-weight: 300;
                line-height: 1.2;
                letter-spacing: -0.0075em;
                margin: 1.5rem 0 2rem;
                color: #0b3d91;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>
