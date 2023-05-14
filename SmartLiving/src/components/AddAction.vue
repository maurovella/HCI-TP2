<template>
<!-- Get a list of all the devices and depending on the device type, get a list of all the actions available-->
<!-- Show them in drop down menus-->
<!-- When the user selects an action, show the parameters that the action needs-->
<!-- When the user selects a parameter, show the possible values for that parameter-->
<!-- When the user selects a value, show a button to add the action to the routine-->
<!-- When the user clicks the button, add the action to the routine-->

    <v-container v-if="devices.length">
        <v-dialog v-model="dialog" persistent max-width="1024">
        <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                        Agregar Acción
                    </v-btn>
        </template>
                <v-card>
                <v-card-text>
                    <v-form>
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
                            @click="onSubmit"
                            style="float: right"
                        >
                            Agregar
                        </v-btn>
                        <v-btn
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="dialog = !dialog"
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

const deviceStore = useDeviceStore();
const routineStore = useRoutineStore();
const devices = ref([]);
deviceStore.getAll().then(data => { devices.value = data });

const deviceNames = computed(() => devices.value.map(device => device.name));
const selectedDevice = ref(null);
const selectedAction = ref(null);
const dialog = ref(false);

const deviceActions = computed(() => {return (d) => {
  const _device = devices.value.find(device => device.name === d);
  const _name = _device.type.name;
  // _ret is not constant
  let _ret = [];

  switch(_name) {
    case "ac":
      _ret = ['subir temperatura', 'bajar temperatura', 'encender', 'apagar'];
      break;
    case "vacuum":
      _ret = ['encender', 'apagar', 'aspirar'];
      break;
    case "lamp":
      _ret = ['encender', 'apagar', 'cambiar color'];
      break;
    case "door":
      _ret = ['abrir', 'cerrar'];
      break;
    case "refrigerator":
      _ret = ['encender', 'apagar', 'subir temperatura', 'bajar temperatura'];
      break;

  }

  return _ret;
}});

</script>