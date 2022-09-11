<template>
    <v-card class="selection-card" outlined tile>
        <h2 class="selection-card-title">Epic Title</h2>
        <img
            src="@/assets/nasa-app-background.jpg"
            alt="Vuetify Logo"
            class="apod-img"
            width="100%"
            height="100%"
            @click="showEpic"
        />
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class EpicCardComponent extends Vue {
    showEpic() {
        this.$router.push("/epic");
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
