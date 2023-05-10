<script setup>
import Title from "@/components/Title.vue";
import RoomCard from "@/components/RoomCard.vue";
import AddDevice from "@/components/AddDevice.vue";
import { useDeviceStore } from "../stores/deviceStore";
const deviceStore = useDeviceStore();
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
                <div 
                    v-for="device in deviceStore.devices"
                    :key="device.id"
                    >
                    <v-slide-group-item class="ma-5 d-flex">
                        <DeviceCard :name="device.name" :type="device.type" :id="device.id"/>
                    </v-slide-group-item>
                </div>
                
            </v-slide-group>
        </v-sheet>
        <AddDevice/>
    </v-container>
</template>