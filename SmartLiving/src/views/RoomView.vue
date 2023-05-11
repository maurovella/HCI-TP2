<template>
    <v-container>
        <Title text="Dispositivos"/>
        <v-sheet class="mx-2 my-5" border rounded color="primary">
            <v-slide-group show-arrows>
                <div 
                    v-for="device in roomDevices"
                    :key="device.id"
                    >
                    <v-slide-group-item class="ma-5 d-flex">
                        <DeviceCard :name="device.name" :type="device.type" :id="device.id"/>
                    </v-slide-group-item>
                </div>
                
            </v-slide-group>
        </v-sheet>
        <AddDevice/>
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
</style>

<script setup>
import ResidenceCard from "@/components/ResidenceCard.vue";
import DeviceCard from "@/components/DeviceCard.vue";
import RoomCard from "@/components/RoomCard.vue";
import AddRoom from "@/components/AddRoom.vue";
import RoutineDialogue from "@/components/AddRoutine.vue";
import Title from "@/components/Title.vue";
import AddDevice from "@/components/AddDevice.vue";
import { useRoomStore } from "@/stores/roomStore";
import { ref } from "vue";
const props = defineProps({
        id: String
});
const roomStore = useRoomStore();
const roomDevices = roomStore.getDevices(props.id);
</script>