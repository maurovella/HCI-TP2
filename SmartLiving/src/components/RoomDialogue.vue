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
    </v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false
    }),
}
</script>