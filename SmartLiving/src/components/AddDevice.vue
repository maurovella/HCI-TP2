<template>
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1024">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
              Agregar Dispositivo
            </v-btn>
          </template>
          <v-card class="mx-auto px-6 py-8">
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-text-field
                v-model="nombre_disp"
                :rules="[required]"
                class="messi"
                clearable
                label="Nombre del dispositivo*"
                counter
                maxlength="20"
              ></v-text-field>
  
              <v-select
                v-model="type"
                :items="typesNames"
                label="Tipo de dispositivo*"
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
                Conectar
              </v-btn>
  
              <v-btn
                color="blue-darken-1"
                size="large"
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
  import { ref, onMounted } from 'vue';
  import { useDeviceStore } from '@/stores/deviceStore';
  import { useDeviceTypeStore } from '@/stores/deviceTypeStore';
  import { Device } from '@/api/device';
  
  const deviceStore = useDeviceStore();
  const dialog = ref(false);
  const form = ref(null);
  const nombre_disp = ref(null);
  const type = ref(null);
  const device = ref(null);
  const result = ref(null);
  const deviceTypesStore = useDeviceTypeStore();
  const deviceTypesArr = ref([]);
  const typesValues = [
                {name: "Aire Acondicionado", value: "ac", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Aspiradora", value: "vacuum", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Lampara", value: "lamp", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Puerta", value: "door", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Heladera", value: "refrigerator", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
            ];
  const typesNames = typesValues.map((type) => type.name);
  
  async function fetchData() {
    try {
      const response = await deviceStore.getTypes();
      //quiero ver que tiene response
        console.log(response);
    
    } catch (error) {
      console.error(error);
    }
  }
  
  //onMounted(fetchData);
  

  
  async function createDevice() {
    const matchingTuple = typesValues.find(function(element) {
    return element.name === type.value;
    });
    const _device = new Device(null, {type:{id:"c89b94e8581855bc"}}, `${nombre_disp.value}`);
    try {
      device.value = await deviceStore.add(_device);
      setResult(device.value);
    } catch (e) {
      setResult(e);
    }
  }
  
  const onSubmit = () => {
    createDevice();
    nombre_disp.value = null;
    type.value = null;
    dialog.value = false;
  };
  
  const onCancel = () => {
    dialog.value = false;
    nombre_disp.value = null;
    type.value = null;
  };
  
  const required = (v) => !!v || 'Field is required';
  
  function setResult(r) {
    result.value = JSON.stringify(r, null, 2);
  }
  </script>
  
  <style>
  .messi {
    width: 600px;
  }
  </style>
  