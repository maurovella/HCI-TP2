<template>
    <v-container>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="1024">
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">
                        Add Device
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6 py-8" max-width="344">
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field
                            v-model="nombre_disp"
                            :rules="[required]"
                            class="mb-2"
                            clearable
                            label="Nombre del dispositivo*"
                            counter
                            maxlength="20"
                        ></v-text-field>

                        <v-select
                            v-model="type"
                            :items="['Aspiradora', 'Lampara', 'Puerta', 'Aire Acondicionado', 'Puerta']"
                            label="Tipo de dispositivo*"
                            :rules="[required]"
                        ></v-select>

                        <br>

                        <v-btn
                            :loading="loader"
                            :disabled="!form"
                            block
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="loader = !loader"
                        >
                            Conectar
                        </v-btn>
                        <v-dialog v-model="loader" :scrim="false" persistent width="auto">
                            <v-card color="primary">
                                <v-card-text>
                                    Por favor espere
                                    <v-progress-linear
                                        indeterminate
                                        color="white"
                                        class="mb-0"
                                    ></v-progress-linear>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                        <v-btn
                            color="blue-darken-1"
                            size="large"
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
    data() {
        return {
            dialog: false,
            form: null,
            nombre_disp: null,
            loader: null,
            type: null,
        };
    },
    methods: {
        onSubmit() {
            this.loader = true;
            setTimeout(() => {
                this.loader = false;

                this.nombre_disp = null;
                this.type = null
            }, 3000);

        },
        onCancel() {
            this.dialog = false;
            this.nombre_disp = null;
            this.type = null
        },
        required (v) {
            return !!v || 'Field is required'
        }
    },
    watch: {
        loader(val) {
            if (!val) {
                this.form = null;
                this.dialog = false;
            }
        },
    },
};
</script>
