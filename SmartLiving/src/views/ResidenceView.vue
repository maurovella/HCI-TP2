<template>
    <v-container>
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                persistent
                width="1024"
            >
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                        Add Room
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Agregar Habitación</span>
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
                                        label="Nombre de la habitacion*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                >
                                    <v-select
                                        :items="['Cocina', 'Living', 'Dormitorio', 'Baño', 'Jardin', 'Oficina' ,'Otro']"
                                        label="Tipo de habitacion*"
                                        required
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*Indica que el campo solicitado es obligatorio</small>
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
        </v-row>

        <v-btn
            color="light-blue-darken-4"
            href="https://open.spotify.com/track/3K7Q9PHUWPTaknlbFPThn2?si=61518d0e73a3402b"
            height="350"
        >
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                >
                    <v-card-title>Nombre Habitacion</v-card-title>
                </v-img>
                <v-card-text>
                    <div>Descripcion habitacion</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange">
                        Edit
                    </v-btn>
                    <v-spacer></v-spacer>

                    <v-btn
                        icon='mdi-chevron-up'
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-btn>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>

<style>

</style>

