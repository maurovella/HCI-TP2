<template>
    <v-btn
        color="black"
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
                :src="img"
                cover
            >
            <div class="delete-overlay">
                    <v-dialog
                        v-model="checkDelete"
                        persistent
                        width="1024">
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">¿Está seguro que desea eliminar la habitación?</span>
                            </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    type="submit"
                                    @click="checkDelete = false"
                                    style="float: right"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    type="submit"
                                    @click="onDelete"
                                    style="float: right"
                                >
                                    Confirmar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-btn icon="mdi-delete" @click.prevent="checkDelete = !checkDelete"/>  
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
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="new_name"
                                            label="Nuevo nombre de la habitacion"
                                            :rules="[name_rules]"
                                            clearable
                                            counter
                                            maxLength="60"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <br>
                            <v-btn
                                color="red"
                                variant="text"
                                @click="checkDelete = !checkDelete"
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
                                @click="onCancel"
                                style="float: right"
                            >
                                Cancelar
                            </v-btn>
                            
                        </v-form>
                    </v-card>
                </v-dialog>
            </v-expand-transition>
            <v-card-actions>
                <v-btn style="position: absolute;margin-top: -45px" color="orange"
                       @click.prevent="dialog = !dialog">
                    Editar
                </v-btn>
                <v-spacer></v-spacer>
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
import {Room, RoomMeta} from "@/api/room";
import {useRoomStore} from "@/stores/roomStore";
const roomStore = useRoomStore();
const form = ref(false);
const dialog = ref(false);
const show = ref(false);
const new_name = ref("");
const new_type = ref("");
const result = ref(null);
const img = selectImg()
const props = defineProps({
  name: String,
  type: String,
    id: String,
    room: Object
});

const checkDelete = ref(false);

function onCancel () {
    dialog.value = !dialog.value;
    resetForm();
}

function resetForm(){
    form.value=false
    new_name.value = ''
    new_type.value=''
}

function name_rules(v) {
    const regex = /^[a-zA-Z0-9_\s]+$/;
    required(v);
    if (v.length < 3 || v.length > 60) {
        return 'Name must be 3-60 characters long';
    }
    if (!regex.test(v)) {
        return 'Only letters, numbers, underscore, and space are allowed';
    }
    return true;
}

function required(v) {
    return !!v || 'Field is required';
}

function setResult(r) {
    result.value = JSON.stringify(r, null, 2)
}

async function onSubmit () {
    dialog.value = false;
    // obtengo la habitacion
    const modified = await roomStore.get(props.id)
    // modifico los valores 
    modified.name = new_name.value;
    try {
        const _result = await roomStore.modify(props.id,new Room(props.id, modified.name, modified.meta))
        resetForm()
        setResult(_result)
    } catch (e) {
        setResult(e)
    }
    
}

async function onDelete() {
    try {
        dialog.value = false;
        const room = await roomStore.get(props.id)
        const _result = await roomStore.remove(props.id)
        setResult(_result)
        room.value = null
    } catch (e) {
        setResult(e)
    }
}

function selectImg(){
    switch(props.type){
        case 'Cocina':
            return 'Cocina.png'
        case 'Living':
            return 'Living.png'
        case 'Dormitorio':
            return 'Dormitorio.png'
        case 'Jardin':
            return 'Jardin.png'
        case 'Baño':
            return 'Baño.png'
        case 'Oficina':
            return 'Oficina.png'
        default:
            return 'Otro.png'
    }
}

</script>

