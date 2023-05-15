<template>

    <v-container>
        
                <v-card class="mx-auto px-6" width="1200" height="500" style="background-color: #9c9c9c;overflow: hidden" box-sizing="border-box">
                    <v-row justify="center">
                    <v-col cols="10">
                        <v-card class="fridge mx-auto">
                            <v-card width="310" height="180" class="micropantalla" style="margin-top: 20px; background-color: #9c9c9c; border-radius: 30px;">
                                <v-card width="370" height="4" style="background-color: black; margin-top: 40px;margin-left: -10px"></v-card>
                                <v-card width="370" height="4" style="position: absolute; background-color: black; margin-top: 90px;margin-left: -10px"></v-card>
                                <v-card width="4" height="94" style="position: absolute; background-color: black; margin-top: -3px;margin-left: 150px"/>
                                
                                <v-btn style="position: absolute;margin-top: -33px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji" @click="selectingMode = !selectingMode">Cambiar Modo</v-btn>
                                <p style="position: absolute;margin-left: 7px;font-size: 23px;font-family: 'Digital Font',emoji">Temp. Freezer</p>
                                <p style="position: absolute;margin-left: 158px;font-size: 23px;font-family: 'Digital Font',emoji">Temp. Heladera</p>
                                <p style="position: absolute;margin-top: 15px;margin-left: 190px;font-size: 60px;font-family: 'Digital Font',emoji">{{ device.state.temperature }}°C</p>
                                <p style="position: absolute;margin-top: 15px;margin-left: 3px;font-size: 60px;font-family: 'Digital Font',emoji">{{ device.state.freezerTemperature }}°C</p>
                                <p style="position: absolute;margin-top: 100px;margin-left: 80px;font-size: 30px;font-family: 'Digital Font',emoji">Mode: {{ device.state.mode }}</p>
                            </v-card>

                            <v-container style="position: absolute;margin-left: 30px;margin-top: 300px ">
                                <v-btn class="pa-4 rounded-t-xl" style="margin-top: -25px;background-color: #726A5B ;color:white" @click="subirFreezer">Subir</v-btn>
                                <p style="margin-left: 20px">TEMP</p>
                                <p style="margin-left: 5px">FREEZER</p>
                                <v-btn class="pa-4 rounded-b-xl" style="margin-top: 5px;background-color: #726A5B ;color:white" @click="bajarFreezer">Bajar</v-btn>
                            </v-container>

                            <v-container style="position: absolute;margin-left: 210px;margin-top: 300px ">
                                <v-btn class="pa-4 rounded-t-xl" style="margin-top: -25px;background-color: #726A5B ;color:white" @click="subirFridge">Subir</v-btn>
                                <p style="margin-left: 20px">TEMP</p>
                                <p style="margin-left: -1px">HELADERA</p>
                                <v-btn class="pa-4 rounded-b-xl" style="margin-top: 5px;background-color: #726A5B ;color:white" @click="bajarFridge">Bajar</v-btn>
                            </v-container>

                        </v-card>
                    </v-col>
                    </v-row>
                </v-card>
        

    </v-container>
    <v-dialog v-model="selectingMode">
        <v-card  class="mx-auto" style="background-color: black;width: 600px;height: 200px;">
            <v-btn @click="setMode('default')" style="position:relative;margin-top:25px;margin-left:150px;width: 300px;">Seleccionar Modo Default</v-btn>
            <v-btn @click="setMode('vacation')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Seleccionar Modo Vacaciones</v-btn>
            <v-btn @click="setMode('party')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Seleccionar Modo Fiesta</v-btn>
        </v-card>
    </v-dialog>

</template>



<style scoped>

.fridge {
    position: relative;
    border-radius: 30px !important;
    display: flex;
    margin-left: 320px;
    margin-top: 40px;
    margin-bottom: -60px;
    color: darkgrey !important;
    height: 500px;
    width: 360px;
    box-sizing: border-box;
}
.Onof {
    color: white !important;
    font-size: 11px !important;
    position: absolute;
    border-radius: 30px !important; ;
    margin-top: -500px;
    margin-left: 340px;
    width: 85px !important;
    height: 50px !important;
    background-color:red !important;

}

.pantalla{
    border-radius: 20px !important;
    position: relative;
    margin-top:85px;
    margin-left:50px;
}
.micropantalla{
    border-radius: 10px !important;
    position: relative;
    margin-top: 10px;
    margin-left: 25px;
}

</style>

<script setup>
    import { ref, watch } from "vue";
    import {DeviceApi} from "@/api/Device";
    import { onMounted } from "vue";
    import { useDeviceStore } from "@/stores/deviceStore";
    import { getGlobalThis } from "@vue/shared";
    import { computed } from "vue";
    const deviceStore = useDeviceStore()
    const selectingMode = ref(false);
    const props = defineProps({
        id: String,
        device: Object,
    });


    function subirFreezer(){
        if(props.device.state.freezerTemperature < -8){
            props.device.state.freezerTemperature += 1;
            DeviceApi.execute(props.id,"setFreezerTemperature",[props.device.state.freezerTemperature]);
        }
    }

    function subirFridge(){
        if(props.device.state.temperature < 8){
            props.device.state.temperature += 1;
            DeviceApi.execute(props.id,"setTemperature",[props.device.state.temperature]);
        }
    }

    function bajarFreezer(){
        if(props.device.state.freezerTemperature > -20){
            props.device.state.freezerTemperature -= 1;
            DeviceApi.execute(props.id,"setFreezerTemperature",[props.device.state.freezerTemperature]);
        }
    }

    function bajarFridge(){
        if(props.device.state.temperature > 2){
            props.device.state.temperature -= 1;
            DeviceApi.execute(props.id,"setTemperature",[props.device.state.temperature]);
        }
    }

    function setMode(mode){
        DeviceApi.execute(props.id,"setMode",[mode]);
        selectingMode.value = false;
        props.device.state.mode = mode;
        setTimeout(() => {
            deviceStore.getAll();
        }, 1);
    }


</script>