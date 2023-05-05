<template>
    <v-item-group mandatory>
        <v-container>
            <DeviceDialogue/>
            <RoomDialogue/>
            <v-row>
                <v-col
                        v-for="(room, index) in rooms"
                        :key="index"
                        cols="12"
                        md="4"
                >
                    <RoomCard :name="room.name"
                              :type="room.type"/>
                </v-col>
            </v-row>

        </v-container>
    </v-item-group>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
import RoomDialogue from "@/components/RoomDialogue.vue";
import DeviceDialogue from "@/components/DeviceDialogue.vue";
import {defineComponent} from "vue";

export default defineComponent({
    components: { RoomDialogue, RoomCard, DeviceDialogue },
    data() {
        return {
            rooms: [

            ]
        };
    },
});

</script>


<style>

</style>

