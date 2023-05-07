<script>
import StarOn from "@/assets/star-on.svg";
import StarOff from "@/assets/star-off.svg";

export default {
    data: () => ({
        show: false,
    }),

    components: StarOn, StarOff,

    name: 'FavStar',
    props: {
        starred: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<template>
    <v-card class="mx-auto pa-2 px-1">
        <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
        >
            <v-btn class="" @click="show = !show">
                <v-icon v-if="show">mdi-volume-off</v-icon>
                <v-icon v-else>mdi-volume-high</v-icon>
            </v-btn>
            <v-card-title>Nombre Dispositivo</v-card-title>
        </v-img>
    </v-card>
</template>

<style scoped>
path {
    fill: none;
}

.starred path{
    fill: #ffd100;
}
</style>