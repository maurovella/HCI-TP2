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

                        <v-form v-if="selectedAction == 'Elegir temperatura'" v-model="form2">
                            <v-text-field v-model="parama" type="number" min="18" max="38" required></v-text-field>
                            <v-btn @click="form2=true;hasParam=true;getParam(temp)">Confirmar</v-btn>
                        </v-form>


                        <v-form v-if="selectedAction == 'Elegir desplazamiento de aspas verticales'" v-model="form2">
                            <v-select
                                v-model="parama"
                                :items="['auto', '22','45','67','90']"
                                label="Desplazamiento de aspas verticales"
                                item-text="name"
                                item-value="id"
                            />
                            <v-btn @click="form2=true;hasParam=true;getParam(verticalSwing)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Elegir desplazamiento de aspas horizontales'" v-model="form2">
                            <v-select
                                v-model="parama"
                                :items="['auto', '-90','-45','0','45','90']"
                                label="Desplazamiento de aspas horizontales"
                                item-text="name"
                                item-value="id"
                            />
                            <v-btn @click="form2=true;hasParam=true;getParam(horizontalSwing)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Elegir modo del aire'" v-model="form2">
                            <v-select
                                v-model="parama"
                                :items="['cool', 'heat', 'fan']"
                                label="Modo"
                                item-text="name"
                                item-value="id"
                            />
                            <v-btn @click="form2=true;hasParam=true;getParam(airMode)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Elegir velocidad'" v-model="form2">
                            <v-select
                                v-model="parama"
                                :items="['auto', '25', '50', '75', '100']"
                                label="Velocidad"
                                item-text="name"
                                item-value="id"
                            />
                            <v-btn @click="form2=true;hasParam=true;getParam(speed)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Cambiar ubicacion de base de carga'" v-model="form2">
                            <v-select
                                v-model="parama"
                                :items="roomNames"
                                label="Ubicacion"
                                item-text="name"
                                item-value="id"
                            />
                            <v-btn @click="form2=true;hasParam=true;getParam(chargeBase)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Cambiar Brillo'" v-model="form2">
                            <v-text-field v-model="parama" type="number" min="0" max="100" required></v-text-field>
                            <v-btn @click="form2=true;hasParam=true;getParam(brightness)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Cambiar color'" v-model="form2">
                            <v-text-field
                                v-model="parama"
                                label="RGB Value"
                                :rules="rgbRules"
                            ></v-text-field>
                            <v-btn @click="form2=true;hasParam=true;getParam(color)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Elegir temperatura de la Heladera'" v-model="form2">
                            <v-text-field v-model="parama" type="number" min="2" max="8" required></v-text-field>
                            <v-btn @click="form2=true;hasParam=true;getParam(temp)">Confirmar</v-btn>
                        </v-form>
                        
                        <v-form v-if="selectedAction == 'Elegir temperatura del Freezer'" v-model="form2">
                            <v-text-field v-model="parama" type="number" min="-20" max="-8" required></v-text-field>
                            <v-btn @click="form2=true;hasParam=true;getParam(temp)">Confirmar</v-btn>
                        </v-form>

                        <v-form v-if="selectedAction == 'Elegir Modo de la heladera'" v-model="form2">
                            <v-select
                                v-model="parama"
                                :items="['default', 'party', 'vacations']"
                                label="Modo"
                                item-text="name"
                                item-value="id"
                            />
                            <v-btn @click="form2=true;hasParam=true;getParam(mode)">Confirmar</v-btn>
                        </v-form>
                    
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
import { useRoomStore } from "@/stores/roomStore"
import { Action } from "@/api/routine.js";

const deviceStore = useDeviceStore();
const routineStore = useRoutineStore();
const roomStore = useRoomStore();
const devices = ref([]);
deviceStore.getAll().then(data => { devices.value = data });
const parama = ref(null);
const deviceNames = computed(() => devices.value.map(device => device.name));
const rooms = ref([]);
roomStore.getAll().then(data => { rooms.value = data });
const roomNames = computed(() => rooms.value.map(room => room.name));
const selectedDevice = ref(null);
const selectedAction = ref(null);
const dialog = ref(false);
let form = ref(false);
let form2 = ref(false);

const rgbRules = [
        value => /^#[0-9A-Fa-f]{6}$/.test(value) || 'Invalid RGB value'
      ]

let action_name = ref('');
let param = ref([]);

const hasParam = ref(false);


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

function getParam(){
    if(selectedAction.value == 'Cambiar ubicacion de base de carga'){
        param.value = [rooms.value[roomNames.value.indexOf(parama.value)].id]
        return;
    }
    if(hasParam.value){
        
        param.value = [parama.value];
        
    }
    else {
        param.value = [];
    }
}

function translate() {
    let _param = '';
    switch(selectedAction.value) {
        case "Elegir temperatura":
            action_name.value = 'setTemperature'
            hasParam.value = true
            break;
        case "Elegir modo del aire":
            action_name.value = 'setMode'
            hasParam.value = true
            break;
        case "Elegir desplazamiento de aspas verticales":
            action_name.value = 'setVerticalSwing'
            hasParam.value = true
            break;
        case "Encender":
            action_name.value = 'turnOn'
            break;
        case "Apagar": 
            action_name.value = 'turnOff'
            break;  
        case "Elegir desplazamiento de aspas horizontales":
            action_name.value = 'setHorizontalSwing'
            hasParam.value = true
            break;
        case "Elegir velocidad":
            action_name.value = 'setFanSpeed'
            hasParam.value = true
            break;
        case "Modo Aspirar":
            action_name.value = 'setMode'
            _param = 'vacuum'
            param.value = [_param]
            break;
        case "Modo Trapear":
            action_name.value = 'setMode'
            _param = 'mop'
            param.value = [_param]
            break;
        case "Cambiar ubicacion de base de carga":
            action_name.value = 'setLocation'
            hasParam.value = true
            break;
        case "Volver a la base de carga":
            action_name.value = 'dock'
            break;
        case "Cambiar color":
            action_name.value = 'setColor'
            hasParam.value = true
            break;
        case "Cambiar Brillo":
            action_name.value = 'setBrightness'
            hasParam.value = true
            break;
        case "Abrir":
            action_name.value = 'open'
            break;
        case "Cerrar":
            action_name.value = 'close'
            break;
        case "Bloquear":
            action_name.value = 'lock'
            break;
        case "Desbloquear":
            action_name.value = 'unlock'
            break;
        case "Elegir temperatura de la Heladera":
            action_name.value = 'setTemperature'
            hasParam.value = true
            break;
        case "Elegir temperatura del Freezer":
            action_name.value = 'setFreezerTemperature'
            hasParam.value = true
            break;
        case "Elegir Modo de la heladera":
            action_name.value = 'setMode'
            hasParam.value = true
            break;
        case "Comenzar":
            action_name.value = 'start'
            break;
        case "Pausar":
            action_name.value = 'pause'
            break;
        default:
            break;    
    }
}

function onSubmit() {
    if (!form.value) return;
    translate();

    const _device = devices.value.find(__device => __device.name === selectedDevice.value);
    let action_device = {
        id: _device.id
    }
    routineStore.addAction(new Action(action_name.value, action_device, param.value, null));
    param.value = [];
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