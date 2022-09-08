<template>
    <v-card class="card pa-2" outlined tile>
        <h2 class="card-title">Epic Title</h2>
        <img
            src="@/assets/nasa-app-background.jpg"
            alt="Vuetify Logo"
            class="apod-img"
            width="300"
            height="300"
            @click="showModal"
        />
        <h1 class="select-title">Carina Cliffs from the Webb Space</h1>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class EpicCardComponent extends Vue {
    showModal() {
        this.$router.push("/epic");
    }
}
</script>

<style scoped lang="scss">
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
.apod-img {
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
</style>
