<script setup>
import Title from "@/components/Title.vue";
import RoomCard from "@/components/RoomCard.vue";
import AddDevice from "@/components/AddDevice.vue";
import DeviceCard from "@/components/DeviceCard.vue";
import { useDeviceStore } from "../stores/deviceStore";
import { computed } from "vue";
import { onMounted } from "vue";
const deviceStore = useDeviceStore();
onMounted(() => {
    deviceStore.getAll();
});
const devices = computed(() => deviceStore.devices);
</script>

<template>
    <v-container>
        <Title text="Favoritos"/>
        <v-sheet class="mx-sm-2 my-sm-5" border rounded color="primary">
            <v-slide-group show-arrows>
                <div class="slide-item">
                    <v-slide-group-item>
                        <RoomCard/>
                    </v-slide-group-item>
                </div>
                <div class="slide-item">
                    <v-slide-group-item class="slide-item">
                        <RoomCard/>
                    </v-slide-group-item>
                </div>
                <div class="slide-item">
                    <v-slide-group-item class="slide-item">
                        <RoomCard/>
                    </v-slide-group-item>
                </div>
                <div class="slide-item">
                    <v-slide-group-item class="slide-item">
                        <RoomCard/>
                    </v-slide-group-item>
                </div>
                <div class="slide-item">
                    <v-slide-group-item class="slide-item">
                        <RoomCard/>
                    </v-slide-group-item>
                </div>
            </v-slide-group>
        </v-sheet>
        <Title text="Dispositivos"/>
        <v-sheet class="mx-2 my-5" border rounded color="primary">
            <v-slide-group show-arrows>
                <div 
                    v-for="device in devices"
                    :key="device.id"
                    >
                    <v-slide-group-item>
                        <div class="slide-item">
                            <DeviceCard :name="device.name" :type="device.type" :id="device.id" :roomId="device.room != null ? device.room.id : 'noRoom'" :device="device"/>
                        </div>
                    </v-slide-group-item>
                </div>
                
            </v-slide-group>
        </v-sheet>
        <AddDevice/>
    </v-container>
</template>

<style scoped>

.slide-item {
    background-blend-mode: lighten;
    position:relative;
    color: white;
    padding:10px;
    margin-bottom: 20px;
    box-sizing: border-box;
}

</style>
