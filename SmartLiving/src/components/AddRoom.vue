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
                        Agregar Habitación
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6 py-8">

                    <v-form
                        v-model="form"
                        @submit.prevent="onSubmit"
                    >
                        <v-text-field
                            v-model="nombre_habitacion"
                            :rules="[required]"
                            class="messi"
                            clearable
                            label="Nombre de la habitación*"
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
                            @click="dialog = !dialog"
                            style="float: right"
                        >
                            Confirmar
                        </v-btn>
                        <v-btn
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="onCancel"
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

import {Room, RoomApi, RoomMeta} from "@/api/room";
import {useRoomStore} from "@/stores/roomStore";
//const roomStore = useRoomStore();
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
            this.resetForm();
        },
        required (v) {
            return !!v || 'Field is required'
        },
        onCancel () {
            this.dialog = !this.dialog;
            this.resetForm();
        },
        resetForm(){
            this.form = false;
            this.nombre_habitacion = null;
            this.type = null;
        }
    },
}
</script>

<style>
.messi{
    width: 600px;
}
</style>