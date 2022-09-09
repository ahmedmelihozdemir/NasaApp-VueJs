<template>
    <div>
        <v-container class="selection lighten-5 mb-6">
            <v-row class="selection-row">
                <v-col class="selection-cards">
                    <EpicCardComponent></EpicCardComponent>
                </v-col>
                <v-col class="selection-cards">
                    <EpicCardComponent></EpicCardComponent>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import EpicCardComponent from "@/components/layout/EpicCardComponent.vue";

@Component({
    components: {
        EpicCardComponent,
    },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.header {
    font-family: "Courier New", Courier, monospace;
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.0075em;
    margin: 1.5rem 0 2rem;
    color: #0b3d91;
}
.selection {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 20%;
    border-radius: 10px;
    &:hover {
        transform: scale(1.1);
        transition: all 0.8s ease;
        cursor: pointer;
    }
}
.selection-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

.apod-title {
    font-family: "Courier New", Courier, monospace;
    font-size: 2rem;
    font-weight: bolder;
    line-height: 1.2;
    letter-spacing: -0.0075em;
    margin: 1.5rem 0 2rem;
    color: #dc3329;
}
.apod-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 15%;
    border-radius: 10px;
    &:hover {
        transform: scale(1.1);
        transition: all 0.8s ease;
        cursor: pointer;
    }
}
.apod-explanation {
    font-family: "Courier New", Courier, monospace;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.0075em;
    margin: 1.5rem 0 2rem;
    color: #0b3d91;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover {
        transform: scale(1.1);
        transition: all 0.8s ease;
    }
}
</style>
