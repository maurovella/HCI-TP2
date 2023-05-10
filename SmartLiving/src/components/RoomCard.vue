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
                <div class="delete-overlay">
                    <v-btn icon="mdi-delete" @click="onDelete"/>  
                </div>
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
                        <v-form v-model="form"
                        @submit.prevent="onSubmit">
                            <v-container>
                                <pre>
                                    {{ props  }}
                                </pre>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="new_name"
                                            label="Nuevo nombre de la habitacion"
                                            :rules="[required]"
                                            clearable
                                            counter
                                            maxlength="20"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-select
                                            v-model="new_type"
                                            :items="['Cocina', 'Living', 'Dormitorio', 'Baño', 'Jardin', 'Oficina' ,'Otro']"
                                            label="Nuevo tipo de habitacion"
                                            :rules="[required]"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <br>
                            <v-btn
                                color="red"
                                variant="text"
                                @click="dialog = false"
                                style="float: left"
                            >
                                Eliminar
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                type="submit"
                                :disabled="!form"
                                @click="dialog = false"
                                style="float: right"
                            >
                                Confirmar
                            </v-btn>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                type="submit"
                                @click="dialog = false"
                                style="float: right"
                            >
                                Cancelar
                            </v-btn>
                            
                        </v-form>
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
.delete-overlay {
    position: absolute;
    top: 8px;
    left: 8px;
}
</style>

<script setup>
import { ref } from "vue";
import {Room, RoomApi, RoomMeta} from "@/api/room";
import {useRoomStore} from "@/stores/roomStore";
//import { setDefaultResultOrder } from "dns";
const roomStore = useRoomStore();
const form = ref(false);
const dialog = ref(false);
const show = ref(false);
const new_name = ref("");
const new_type = ref("");
const result = ref(null);
const props = defineProps({
  name: String,
  type: String,
    id: String,
});
function required (v) {
    return !!v || 'Field is required'
}

function setResult(r) {
    result.value = JSON.stringify(r, null, 2)
}

async function onSubmit () {
    dialog.value = false;
    // obtengo la habitacion
    const modified = await roomStore.get(props.id);
    // modifico los valores
    modified.name = new_name.value;
    modified.meta.type = new_type.value;
    // guardo la habitacion
    try {
        const _result = await roomStore.modify(new Room(props.id, modified.name, modified.meta))
        setResult(_result)
    } catch (e) {
        setResult(e)
    }
    
}

async function onDelete() {
    try {
        const room = await roomStore.get(props.id)
        const _result = await roomStore.remove(props.id)
        setResult(_result)
        room.value = null
    } catch (e) {
        setResult(e)
    }
}

</script>

