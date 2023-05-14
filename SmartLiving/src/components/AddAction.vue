<template>
    <v-container v-if="devices.length">
        <v-dialog v-model="dialog" persistent max-width="1024">
            <template v-slot:activator="{ props }">
                        <v-card class="align-center justify-center">
                            <v-card-item v-for="(action, index) in routineStore.actions" :key="index">
                                <v-card-title class="justify-center">
                                    <p class="mt-1">
                                        {{ getDeviceName(action) }} 
                                        <v-icon icon="mdi-arrow-right-circle"/>
                                        {{ action.actionName }}
                                        <v-btn density="compact" class="ms-5 mr-1 mt-0." icon="mdi-delete" style="float: right" @click="onDelete(index)"/>
                                    </p>
                                </v-card-title>
                                
                                     
                            </v-card-item>
                        </v-card>
                        <v-card-actions class="justify-center mt-4">
                            <v-btn
                                color="primary"
                                v-bind="props"
                                prepend-icon="mdi-plus-circle"
                            >
                                Agregar Acción
                            </v-btn>
                        </v-card-actions>
            </template>
            <v-card>
                <v-card-text>
                    <v-form
                        v-model="form"
                        @submit.prevent="onSubmit">
                        <v-select
                            v-model="selectedDevice"
                            :items="deviceNames"
                            label="Dispositivo"
                            item-text="name"
                            item-value="id"
                        />
                        <v-select
                            :disabled="!selectedDevice"
                            v-model="selectedAction"
                            v-if="selectedDevice"
                            :items="deviceActions(selectedDevice)"
                            label="Acción"
                            item-text="name"
                            item-value="id"
                        />
                    
                        <v-btn
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="dialog = !dialog"
                            style="float: right"
                        >
                            Agregar
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
                </v-card-text>
            </v-card>  
        </v-dialog>    
    </v-container>
</template>

<style scoped>
</style>

<script setup>
import { ref, computed } from 'vue'
import { useDeviceStore } from "@/stores/deviceStore";
import { useRoutineStore } from "@/stores/routineStore";
import { Action } from "@/api/routine.js";

const deviceStore = useDeviceStore();
const routineStore = useRoutineStore();
const devices = ref([]);
deviceStore.getAll().then(data => { devices.value = data });

const deviceNames = computed(() => devices.value.map(device => device.name));
const selectedDevice = ref(null);
const selectedAction = ref(null);
const dialog = ref(false);
const form = ref(false);

const deviceNameMap = new Map();

async function fetchDeviceName(deviceId) {
  const device = await deviceStore.get(deviceId);
  deviceNameMap.set(deviceId, device.name);
}

const getDeviceName = computed(() => (action) => {
  const deviceId = action.device.id;
  if (!deviceNameMap.has(deviceId)) {
    fetchDeviceName(deviceId);
  }
  return deviceNameMap.get(deviceId);
});

const deviceActions = computed(() => {return (d) => {
  const _device = devices.value.find(device => device.name === d);
  const _name = _device.type.name;
  // _ret is not constant
  let _ret = [];

    switch(_name) {
        case "ac":
            _ret = ['Encender', 'Apagar', 'Elegir temperatura','Elegir desplazamiento de aspas verticales','Elegir desplazamiento de aspas horizontales','Elegir modo del aire','Elegir velocidad'];
            break;
        case "vacuum":
            _ret = ['Comenzar', 'Pausar', 'Modo Aspirar','Modo Trapear','Cambiar ubicacion de base de carga','Volver a la base de carga'];
            break;
        case "lamp":
            _ret = ['Encender', 'Apagar', 'Cambiar color','Cambiar Brillo'];
            break;
        case "door":
            _ret = ['Abrir', 'Cerrar','Bloquear','Desbloquear'];
            break;
        case "refrigerator":
            _ret = ['Elegir temperatura de la Heladera', 'Elegir temperatura del Freezer','Elegir Modo de la heladera'];
            break;
        default:
            _ret = ["no device selected"];
            break;
    }
    return _ret;
}});

function translate() {
    const _device = devices.value.find(__device => __device.name === selectedDevice.value);
    let action_name = '';
    let param = [];
    let action_device = {
        id: _device.id
    }
    switch(selectedAction.value) {
        case "Elegir temperatura":
            action_name = 'setTemperature'
            param = [28]
            break;
        case "Elegir modo del aire":
            action_name = 'setMode'
            param = ['heat']
            break;
        case "Elegir desplazamiento de aspas verticales":
            action_name = 'setVerticalSwing'
            param = [22]
            break;
        case "Encender":
            action_name = 'turnOn'
            break;
        case "Apagar": 
            action_name = 'turnOff'
            break;  
        case "Elegir desplazamiento de aspas horizontales":
            action_name = 'setHorizontalSwing'
            param = [-45]
            break;
        case "Elegir velocidad":
            action_name = 'setFanSpeed'
            param = [25]
            break;
        case "Modo Aspirar":
            action_name = 'setMode'
            param = ['vacuum']
            break;
        case "Modo Trapear":
            action_name = 'setMode'
            param = ['mop']
            break;
        case "Cambiar ubicacion de base de carga":
            action_name = 'setLocation'
            param = ['472de1eb64bac961']
            break;
        case "Volver a la base de carga":
            action_name = 'dock'
            break;
        case "Cambiar color":
            action_name = 'setColor'
            param = ['#9c9c9c']
            break;
        case "Cambiar Brillo":
            action_name = 'setBrightness'
            param = [20]
            break;
        case "Abrir":
            action_name = 'open'
            break;
        case "Cerrar":
            action_name = 'close'
            break;
        case "Bloquear":
            action_name = 'lock'
            break;
        case "Desbloquear":
            action_name = 'unlock'
            break;
        case "Elegir temperatura de la Heladera":
            action_name = 'setTemperature'
            param = [5]
            break;
        case "Elegir temperatura del Freezer":
            action_name = 'setFreezerTemperature'
            param = [-10]
            break;
        case "Elegir Modo de la heladera":
            action_name = 'setMode'
            param = ['vacation']
            break;
        case "Comenzar":
            action_name = 'start'
            break;
        case "Pausar":
            action_name = 'pause'
            break;
        default:
            break;    
    }
    return new Action(action_name, action_device, param, null);
}

function onSubmit() {
    if (!form.value) return;
    const action = translate();
    routineStore.addAction(action);
    resetForm();
}

function resetForm() {
    form.value = false;
    selectedDevice.value = null;
    selectedAction.value = null;
}

function onCancel () {
    dialog.value = !dialog.value;
    resetForm();
}

function onDelete (index) {
    routineStore.deleteAction(index);
}

</script>