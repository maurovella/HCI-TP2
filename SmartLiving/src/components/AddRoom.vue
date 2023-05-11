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

<script setup>

import {Room, RoomMeta} from "@/api/room";
import {useRoomStore} from "@/stores/roomStore";
import {ref} from 'vue'

const roomStore = useRoomStore();

const room = ref(null)
const result = ref(null)


function onSubmit(){
    if (!form.value) return
    createRoom();
    resetForm();
}

function required (v) {
    return !!v || 'Field is required'
}

const form = ref(false)
const dialog= ref(false)
const nombre_habitacion= ref('')
const type=ref('')

function onCancel () {
    dialog.value = !dialog.value;
    resetForm();
}

function resetForm(){
    form.value=false
    nombre_habitacion.value = ''
    type.value=''
}

async function createRoom() {
    const roomMeta = new RoomMeta(type.value)
    const _room = new Room(null, `${nombre_habitacion.value}`, roomMeta.value)

    try {
        room.value = await roomStore.add(_room)
        setResult(room.value)
    } catch (e) {
        setResult(e)
    }
}

function setResult(r) {
    result.value = JSON.stringify(r, null, 2)
}

</script>

<style>
.messi{
    width: 600px;
}
</style>