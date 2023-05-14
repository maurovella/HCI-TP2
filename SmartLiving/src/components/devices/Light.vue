<template>
    <v-card class="mx-auto" style="background-color: #9c9c9c" height="600" width="1200">
        <img :src="imagen" width="300" style="position: absolute; margin-top: -10px;margin-left: 450px">
        <v-btn
                        color="white"
                        v-bind="props"
                        width="200px"
                        style="margin-top: 250px;margin-left: 900px"
                        @click="colorDialog = !colorDialog"
                >
                    Elegir Color
                </v-btn>
        <v-dialog v-model="colorDialog">
            <v-card class="mx-auto" style="background-color: white;height: 500px;width: 300px;justify-self: center">
                <v-btn class="mp-3" style="margin-top: 5px;"
                  @click="setColor">
                  Confirmar color
                </v-btn>
                <div>
                    <v-color-picker
                      class="ma-2"
                      show-swatches
                      swatches-max-height="300px"
                      v-model="color">
                    </v-color-picker>
                </div>
            </v-card>
        </v-dialog>
        <v-switch
                color="green"
                v-model="model"
                hide-details
                true-value="on"
                false-value="off"
                :label="`${model}`"
                style="position: absolute;margin-top: 245px;margin-left: 150px;color:white"
                @click="onSwitch"
        ></v-switch>
        <v-slider style="position: absolute;margin-top: 350px;margin-left: 450px;width: 300px"
                  v-model="slider1"
                  thumb-color="yellow"
                  track-color="black"
                  track-fill-color="yellow"
                  thumb-label
        ></v-slider>
        <v-btn
        style="position: absolute;margin-top: 350px;margin-left: 900px"
        @click="setBrightness"
        >
          Confirmar brillo
        </v-btn>
        <v-card height=60px width=195px class="pr-30" variant="tonal" style="font-size: 20px; margin-top: -150px; margin-left: 135px;">

          <p>Brillo: {{ props.device.state.brightness }}</p>
          <p>Color (RGB): {{ props.device.state.color }}</p>
        </v-card>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import {DeviceApi} from "@/api/Device";

const model = ref(props.device.state.status? props.device.state.status: 'off');
const colorDialog = ref(false);
const slider1 = ref(props.device.state.brightness? props.device.state.brightness: 0);
const imagen = ref(model.value == 'on' ? 'Prendida.png':'Apagada.png');
const color = ref(props.device.state.color? props.device.state.color: 'FFFFFF');
const props = defineProps({
        id: String,
        device: Object,
    });

function onSwitch() {
  if (model.value === 'on') {
    model.value = 'off';
    imagen.value = 'Apagada.png';
    props.device.state.status = 'off'; 
    DeviceApi.execute(props.id,"turnOff");
  } else {
    model.value = 'on';
    imagen.value = 'Prendida.png';
    props.device.state.status = 'on';
    DeviceApi.execute(props.id,"turnOn");
  }
}

function setColor(){
  colorDialog.value = !colorDialog.value;
  const cutColor = color.value.slice(1);
  props.device.state.color = cutColor;
  DeviceApi.execute(props.id,"setColor",[color.value]);
}

function setBrightness(){
  const roundedBrightness = slider1.value.toFixed(1);
  props.device.state.brightness = roundedBrightness
  DeviceApi.execute(props.id,"setBrightness",[roundedBrightness]);
  
}

</script>
