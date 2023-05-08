<template>
    <v-container>
        <v-row justify="center">
            <v-dialog
                    v-model="rutinaDialog"
                    persistent
                    max-width="1024"
            >
                <template v-slot:activator="{ props }">
                    <v-btn
                            color="primary"
                            v-bind="props"
                    >
                        Agregar rutina
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6 py-8">

                    <v-form
                            v-model="form"
                            @submit.prevent="onSubmitRutina"
                    >
                        <v-text-field
                                v-model="nombre_habitacion"
                                :rules="[required]"
                                class="messi"
                                clearable
                                label="Nombre de la rutina*"
                                counter
                                maxlength="20"
                        ></v-text-field>

                        <v-select
                                v-model="type"
                                :items="['Cocina', 'Living', 'Dormitorio', 'Baño', 'Jardin', 'Oficina' ,'Otro']"
                                label="Tipo de habitacion*"
                                :rules="[required]"
                        ></v-select>

                        <br>

                        <v-btn
                            :disabled="!form"
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="rutinaDialog = !rutinaDialog"
                            style="float: right"
                        >
                            Confirmar
                        </v-btn>
                        <v-btn
                                color="blue-darken-1"
                                size="large"
                                type="submit"
                                variant="text"
                                @click="onCancelRutina"
                                style="float: right"
                        >
                            Cancelar
                        </v-btn>

                    </v-form>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        rutinaDialog: false,
        form: false,
        nombre_habitacion: null,
        type: null
    }),

    methods: {
        onSubmitRutina () {
            if (!this.form) return
            this.resetForm();
        },
        required (v) {
            return !!v || 'Field is required'
        },
        onCancelRutina () {
            this.resetForm();
            this.rutinaDialog = false;

        },
        resetForm(){
            this.form = false;
            this.nombre_habitacion = null;
            this.type = null;
        }
    },
}
</script>
