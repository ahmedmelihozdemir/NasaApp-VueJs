<template>
    <v-app>
        <v-app-bar app color="transparent" dark>
            <div class="d-flex align-center">
                <a href="">
                    <router-link to="home"></router-link>
                    <v-img
                        alt="Nasa Logo"
                        class="header-logo shrink mr-1 mt-2"
                        contain
                        src="@/assets/nasa-logo-web-rgb.png"
                        transition="scale-transition"
                        width="150"
                        content-class="nasa-logo"
                    />
                </a>

                <v-img
                    alt="Nasa Name"
                    class="shrink mt-2 hidden-sm-and-down"
                    contain
                    min-width="10"
                    src="@/assets/NASA_Worm_logo.svg.png"
                    width="80"
                    aspect-ratio="1"
                />
            </div>

            <v-spacer></v-spacer>

            <v-btn
                class="nasa-btn"
                href="https://nasa.gov"
                target="_blank"
                text
            >
                <span class="transparent mr-2">Nasa Web Site</span>
                <v-icon class="transparent">mdi-open-in-new</v-icon>
            </v-btn>

            <div class="menu-select ml-3">
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
                    </template>
                    <v-list class="responsiveMenu">
                        <v-list-item>
                            <v-list-item-title
                                ><router-link class="router-link" to="/"
                                    >Home</router-link
                                ></v-list-item-title
                            >
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title
                                ><router-link class="router-link" to="/about"
                                    >About-Apod</router-link
                                ></v-list-item-title
                            >
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title
                                ><router-link class="router-link" to="/epic"
                                    >About-Epic</router-link
                                ></v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HeaderComponent extends Vue{

};
</script>

<style scoped lang="scss">
.header-logo {
    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
}
.menu-select {
    display: flex;
}
.router-link {
    color: #0b3d91;
    text-decoration: none;
    text-align: center;
    &:hover {
        color: #dc3329;
    }
}
</style>
