<template>
    <v-btn
        color="black"
        href=""
        height="280"
        width="300"
    >
        <v-card
            class="mx-auto"
            width="300"
            elevation="3"
        >
            <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
            >
                <div class="image-overlay">
                    <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart-outline'" @click.prevent="show=!show"/>
                </div>
                <v-card-title >{{ name }}</v-card-title>
            </v-img>
            <v-card-text>
                <div>{{ type }}</div>
            </v-card-text>
            <v-expand-transition>
                <v-dialog
                    v-model="dialog"
                    persistent
                    width="1024"
                >
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
                                            label="Nuevo nombre de la habitacion"
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
                </v-dialog>
            </v-expand-transition>
            <v-card-actions>
                <v-btn color="orange"
                       @click.prevent="dialog = !dialog">
                    Edit
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn
                    icon='mdi-chevron-up'
                ></v-btn>
            </v-card-actions>
        </v-card>
    </v-btn>
</template>

<style>
.image-overlay {
    position: absolute;
    top: 8px;
    right: 8px;
}
</style>

<script setup>
import { ref } from "vue";
const dialog = ref(false);
const show = ref(false);
const props = defineProps({
  name: String,
  type: String
});
</script>

