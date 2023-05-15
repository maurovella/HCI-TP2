<script setup>
import { ref } from "vue";
import { Device , DeviceApi} from "@/api/device";
import { useDeviceStore } from "@/stores/deviceStore";
import Vaccum from "@/components/devices/Vaccum.vue";
import AC from "@/components/devices/AC.vue";
import Door from "@/components/devices/Door.vue";
import Fridge from "@/components/devices/Fridge.vue";
import Light from "@/components/devices/Light.vue";
import { onMounted } from "vue";
const deviceStore = useDeviceStore();
const form = ref(false);
const dialog = ref(false);
const new_name = ref("");
const result = ref(null);
const show = ref(false);
const img = selectImg();
const display = ref(false);
const props = defineProps({
    name: String,
    type: String,
    id: String,
    roomId: String,
    device: Object
});

const checkDelete = ref(false);

let value = true;

function accionRepetida() {
  //deviceStore.getAll();
  // Verificar si value es false y detener la repetición
  if (!value) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(accionRepetida, 3000);

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

const typesValues = [
    {name: "Aire Acondicionado", typeId: {id: "li6cbv5sdlatti0j"}, value: "ac"},
    {name: "Aspiradora", typeId: {id: "ofglvd9gqx8yfl3l"}, value: "vacuum"},
    {name: "Lampara", typeId: {id: "go46xmbqeomjrsjr"}, value: "lamp"},
    {name: "Puerta", typeId: {id: "lsf78ly0eqrjbz91"}, value: "door"},
    {name: "Heladera", typeId: {id: "rnizejqr2di0okho"}, value: "refrigerator"},
]; 

const type_name = typesValues.find(function(element) {
    return element.typeId.id === props.type.id;
}).name;

function resetForm(){
    form.value=false
    new_name.value = ''
}

function onCancel () {
    dialog.value = !dialog.value;
    resetForm();
}

async function onSubmit () {
    dialog.value = false;
    const modified = await deviceStore.get(props.id);
    const matchingTuple = typesValues.find(function(element) {
        return element.typeId.id === props.type.id;
    });
    modified.name = new_name.value;
    modified.meta = matchingTuple.typeId;
    try {
        const _result = await deviceStore.modify(new Device(props.id, modified.meta.type, modified.name, modified.meta))
        resetForm()
        setResult(_result)
    } catch (e) {
        setResult(e)
    }
}

async function onDelete() {
    try {
        dialog.value = false;
        const device = await deviceStore.get(props.id)
        const _result = await deviceStore.remove(props.id)
        setResult(_result)
        device.value = null
    } catch (e) {
        setResult(e)
    }
}

function abrir() {
    display.value = true;
    deviceStore.getAll();
}

function selectImg(){
    switch(props.type.name ){
        case 'ac':
            return 'AC.png'
        case 'vacuum':
            return 'Aspiradora.png'
        case 'refrigerator':
            return 'Heladera.png'
        case 'lamp':
            return 'Lampara.png'
        case 'door':
            return 'Puerta.png'
    }
}
</script>

<template>
    <v-btn
        color="black"
        height="280"
        width="300"
        @click="abrir"
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
                                <span class="text-h5">¿Está seguro que desea eliminar el dispositivo?</span>
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
                    <v-btn icon="mdi-delete" @click.stop="checkDelete = !checkDelete"/>  
                </div>
                <div class="image-overlay">
                    <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart-outline'" @click.stop="show=!show"/>
                </div>
                <v-card-title >{{ name }}</v-card-title>
            </v-img>
            <v-card-text>
                <div>{{ type_name }}</div>
            </v-card-text>
            <v-expand-transition>
                <v-dialog
                    v-model="dialog"
                    persistent
                    width="1024"
                >
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Editar Dispositivo</span>
                        </v-card-title>
                        <v-form 
                            v-model="form"
                            @submit.prevent="onSubmit"
                        >
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="new_name"
                                            label="Nuevo nombre del dispositivo"
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
                                @click.stop="checkDelete = !checkDelete"
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
                <v-btn style="position: absolute; margin-top: -45px" color="orange" @click.stop="dialog = !dialog">
                    Editar
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-btn>
    <v-dialog v-model="display">
        <v-btn @click="display=!display" style="position: relative;margin-top: 0px;margin-left: 1248px;" icon="mdi-close-box"></v-btn>
        <AC :device="props.device" :id="props.id"  v-if="props.type.name === 'ac'"/>
        <Door :device="props.device" :id="props.id" v-if="props.type.name === 'door'"/>
        <Light :device="props.device" :id="props.id" v-if="props.type.name === 'lamp'"/>
        <Fridge :device="props.device" :id="props.id" v-if="props.type.name === 'refrigerator'"/>
        <Vaccum :device="props.device" :id="props.id" :roomId="props.roomId" v-if="props.type.name === 'vacuum'"/>
    </v-dialog>
</template>

<style scoped>
path {
    fill: none;
}

.starred path{
    fill: #ffd100;
}

.image-overlay {
    position: absolute;
    top: 8px;
    right: 8px;
}

.text-center {
    text-align: center;
    margin-top: auto;
}
</style>