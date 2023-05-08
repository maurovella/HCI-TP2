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
            class="text-right pa-2"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
        >
            <div class="image-overlay">
                <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart-outline'" @click="show=!show"/>
            </div>
        </v-img>
        <v-card-text class="text-center">
            Nombre Dispositivo
        </v-card-text>
    </v-card>
</template>

<style scoped>
path {
    fill: none;
}

.starred path{
    fill: #ffd100;
}

.image-overlay {
    position: absolute;
    top: 8px;
    right: 8px;
}

.text-center {
    text-align: center;
    margin-top: auto;
}
</style>