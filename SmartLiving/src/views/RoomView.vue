<template>
    <v-container>
        <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
                <v-btn style="position: absolute;margin-left: 1200px" :icon="'mdi-cog'" v-bind="props"/>
            </template>
            <v-card class="mx-auto" style="background-color: white;height: 228px;width: 900px">
                <v-form>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Editar Habitación</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            label="Habitacion"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-select
                                            :items="['Cocina', 'Living', 'Dormitorio', 'Baño', 'Jardin', 'Oficina' ,'Otro']"
                                            label="Nuevo tipo de habitacion"
                                            required
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                @click="dialog = false"
                            >
                                Cancelar
                            </v-btn>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                @click="dialog = false"
                            >
                                Confirmar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-card>
        </v-dialog>

        <h1>Dispositivos</h1>
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

import { ref } from "vue";

const dialog = ref(false);
</script>