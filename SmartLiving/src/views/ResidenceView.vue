<script>
import ResidenceCard from "@/components/ResidenceCard.vue";
import DeviceCard from "@/components/DeviceCard.vue";
import RoomCard from "@/components/RoomCard.vue";
import AddRoom from "@/components/AddRoom.vue";
import AddRoutine from "@/components/AddRoutine.vue";
import Title from "@/components/Title.vue";

export default {
    components: {Title, AddRoom, AddRoutine, RoomCard, DeviceCard, ResidenceCard}
}
</script>

<template>
    <v-container>
        <h1>Favoritos</h1>
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


        <h1>Recientes</h1>
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

        <h1>Habitaciones</h1>
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
        <AddRoom class="add"/>
        <h1>Rutinas</h1>
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
        <AddRoutine class="add"/>
    </v-container>
</template>

<style >
body{
    background-color: #4c4592;
}
header {
    line-height: 1.5;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
}

.add{
    position: relative;
    margin-top: 30px;
}
</style>
