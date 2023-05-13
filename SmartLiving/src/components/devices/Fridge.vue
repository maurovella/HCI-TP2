<template>

    <v-container>
        <v-row justify="center">
                <v-card class="mx-auto px-6" width="1200" height="500" style="background-color: #9c9c9c;overflow: hidden" box-sizing="border-box">
                    <v-card class="fridge mx-auto">
                        <v-card width="310" height="180" class="micropantalla" style="margin-top: 20px; background-color: #9c9c9c; border-radius: 30px;">
                            <v-card width="370" height="4" style="background-color: black; margin-top: 40px;margin-left: -10px"></v-card>
                            <v-card width="370" height="4" style="position: absolute; background-color: black; margin-top: 90px;margin-left: -10px"></v-card>
                            
                            <v-btn style="position: absolute;margin-top: -33px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji" @click="selectingMode = !selectingMode">Cambiar Modo</v-btn>
                            <v-btn style="position: absolute;margin-top: 105px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji">Obtener Estado</v-btn>
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
                </v-card>
        </v-row>

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
    margin-left: 340px;
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
    import { ref } from "vue";
    import {DeviceApi} from "@/api/Device";
    const selectingMode = ref(false);
    const props = defineProps({
        id: String,
    });

    const freezerTemp = ref(-8);
    const fridgeTemp = ref(2);

    function subirFreezer(){
        if(freezerTemp.value < -8){
            freezerTemp.value += 1;
            DeviceApi.execute(props.id,"setFreezerTemperature",[freezerTemp.value]);
        }
    }

    function subirFridge(){
        if(fridgeTemp.value < 8){
            fridgeTemp.value += 1;
            DeviceApi.execute(props.id,"setTemperature",[fridgeTemp.value]);
        }
    }

    function bajarFreezer(){
        if(freezerTemp.value > -20){
            freezerTemp.value -= 1;
            DeviceApi.execute(props.id,"setFreezerTemperature",[freezerTemp.value]);
        }
    }

    function bajarFridge(){
        if(fridgeTemp.value > 2){
            fridgeTemp.value -= 1;
            DeviceApi.execute(props.id,"setTemperature",[fridgeTemp.value]);
        }
    }

    function setMode(mode){
        DeviceApi.execute(props.id,"setMode",[mode]);
        selectingMode.value = false;
    }



</script>