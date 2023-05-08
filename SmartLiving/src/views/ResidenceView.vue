<script>
import ResidenceCard from "@/components/ResidenceCard.vue";
import DeviceCard from "@/components/DeviceCard.vue";
import RoomCard from "@/components/RoomCard.vue";
import AddRoom from "@/components/AddRoom.vue";
import AddRoutine from "@/components/AddRoutine.vue";

export default {
    components: {AddRoom, AddRoutine, RoomCard, DeviceCard, ResidenceCard}
}
</script>

<template>
    <v-item-group mandatory>
        <v-container>
            <h2>Favoritos</h2>
            <v-row>
                <v-col
                    v-for="n in 5"
                    :key="n"
                    cols="12"
                    md="4"
                >
                    <RoomCard/>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>

    <v-item-group mandatory>
        <v-container>
            <h2>Recientes</h2>
            <v-row>
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
                >
                    <RoomCard :name="name"
                              :type="type"/>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <v-item-group mandatory>
        <v-container>
            <h2>Habitaciones</h2>
            <v-row>
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
                >
                    <RoomCard/>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <AddRoom class="add"/>
    <v-item-group mandatory>
        <v-container>
            <h2>Rutinas</h2>
            <v-row>
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
                >
                    <RoomCard/>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <AddRoutine class="add"/>
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
