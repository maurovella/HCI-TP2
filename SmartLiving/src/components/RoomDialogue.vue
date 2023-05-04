<template>
    <v-container>
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                persistent
                max-width="1024"
            >
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                        Add Room
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6 py-8" max-width="344">

                    <v-form
                        v-model="form"
                        @submit.prevent="onSubmit"
                    >
                        <v-text-field
                            v-model="nombre_habitacion"
                            :rules="[required]"
                            class="mb-2"
                            clearable
                            label="Nombre de la habitación*"
                            counter
                            maxlength="20"
                        ></v-text-field>

                        <v-select
                            :items="['Cocina', 'Living', 'Dormitorio', 'Baño', 'Jardin', 'Oficina' ,'Otro']"
                            label="Tipo de habitacion*"
                            :rules="[required]"
                        ></v-select>

                        <br>

                        <v-btn
                            :disabled="!form"
                            block
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="dialog = !dialog"
                        >
                            Confirmar
                        </v-btn>
                        <v-btn
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="onCancel"
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
        dialog: false,
        form: false,
        nombre_habitacion: null,
        type: null
    }),

    methods: {
        onSubmit () {
            if (!this.form) return
            this.nombre_habitacion = null;
            this.type = null
        },
        required (v) {
            return !!v || 'Field is required'
        },
        onCancel () {
            this.dialog = !this.dialog;
            this.type = null;
            this.nombre_habitacion = null;
        },
    },
}
</script>