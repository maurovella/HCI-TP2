<script>
import DeviceCard from "@/components/DeviceCard.vue"
import Title from "@/components/Title.vue";
import RoomCard from "@/components/RoomCard.vue";

export default {
    components: {RoomCard, Title, DeviceCard},
}
</script>

<template>
    <v-container>
        <Title text="Favoritos"/>
        <v-sheet class="mx-sm-2 my-sm-5" border rounded color="primary">
            <v-slide-group show-arrows>
                <v-slide-group-item class="ma-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
                <v-slide-group-item class="ma-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
                <v-slide-group-item class="ma-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
                <v-slide-group-item class="ma-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
                <v-slide-group-item class="ma-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
                <v-slide-group-item class="ma-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
        <Title text="Dispositivos"/>
        <v-sheet class="mx-2 my-5" border rounded color="primary">
            <v-slide-group show-arrows>
                <v-slide-group-item class="pa-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
                <v-slide-group-item class="pa-5 d-flex">
                    <RoomCard/>
                </v-slide-group-item>
                <v-slide-group-item>
                    <RoomCard/>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
</template>