<template>
    <v-container>
        <v-row justify="center">
                <v-card class="mx-auto px-6" width="1200" height="600" style="background-color: #9c9c9c;overflow: hidden" >
                    <p style="position: absolute;">Velocidad: {{ device.state.fanSpeed }}<br>Desplazamiento de aspas verticales: {{ device.state.verticalSwing }}°<br>Desplazamiento de aspas horizontales: {{   device.state.horizontalSwing }} 
                    <br>Modo: {{  device.state.mode  }}</p>
                    <v-card width="500" height="800" color="white" class="aire">
                        <v-card width="400" height="200px" color="black" class="pantalla">
                            <v-card width="350" height="180" class="micropantalla" style="background-color: #9c9c9c">
                                <v-card width="370" height="4" style="background-color: black; margin-top: 40px;margin-left: -10px">

                                </v-card>

                                <v-card width="370" height="4" style="position: absolute; background-color: black; margin-top: 90px;margin-left: -10px">

                                </v-card>
                                <v-card style="position: absolute;background-color: black;margin-left: 100px" height="90" width="4">

                                </v-card>
                                <p style="position: absolute;margin-top: -43px;margin-left: 5px;font-family: 'Digital Font',emoji;font-size: 25px">Modo:</p>
                                <v-btn style="position: absolute;margin-top: -33px;margin-left: 80px;height: 20px;width: 140px;font-size: 12px;font-family: 'Digital Font',emoji" @click="selectingMode = !selectingMode">Seleccionar modo</v-btn>
                                <p style="position: absolute;margin-left: 11px;font-size: 60px;font-family: 'Digital Font',emoji">{{ props.device.state.status }}</p>
                                <p style="position: absolute;margin-left: 110px;font-size: 20px;font-family: 'Digital Font',emoji">temperatura:</p>
                                <p style="position: absolute;margin-left: 180px;font-size: 60px;font-family: 'Digital Font',emoji;margin-top: 10px;">{{props.device.state.temperature}}°C</p>
                                <p style="position: absolute;margin-top: 105px; margin-left: 10px;font-size: 15px;font-family: 'Digital Font',emoji">Velocidad: </p>
                                <v-btn style="position: absolute;margin-top: 105px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji" @click="selectingSpeed = !selectingSpeed">elegir velocidad</v-btn>
                            </v-card>
                        </v-card>
                        <v-btn style="position: absolute;margin-top: 382px;margin-left: 50px;background-color: #726A5B ;color:white;font-size: 10px" @click="aspas = !aspas">Desplazamiento de Aspas</v-btn>
                        <v-container style="position: absolute;margin-left: 330px;margin-top: 350px ">
                            <v-btn class="pa-4 rounded-t-xl" style="margin-top: -25px;background-color: #726A5B ;color:white" @click="subirTemp">Subir</v-btn>
                            <p style="margin-left: 17px">TEMP</p>
                            <v-btn class="pa-4 rounded-b-xl" style="margin-top: 5px;background-color: #726A5B ;color:white" @click="bajarTemp">Bajar</v-btn>
                        </v-container>

                        <v-btn class="Onof"
                        @click="turnOnOff"
                        >
                            Encender/<br>Apagar
                        </v-btn>
                    </v-card>
                </v-card>
        </v-row>
        <v-dialog v-model="selectingMode">
            <v-card  class="mx-auto" style="background-color: black;width: 600px;height: 200px;">
                <v-btn @click="setMode('cool')" style="position:relative;margin-top:25px;margin-left:150px;width: 300px;">Seleccionar Modo Frio</v-btn>
                <v-btn @click="setMode('heat')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Seleccionar Modo Calor</v-btn>
                <v-btn @click="setMode('fan')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Seleccionar Modo Ventilador</v-btn>
            </v-card>
        </v-dialog>
        <v-dialog v-model="selectingSpeed">
            <v-card  class="mx-auto" style="background-color: black;width: 600px;height: 300px;">
                <v-btn @click="fanSpeed('auto')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Velocidad Automatica</v-btn>
                <v-btn @click="fanSpeed('25')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Velocidad Baja</v-btn>
                <v-btn @click="fanSpeed('50')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Velocidad Media</v-btn>
                <v-btn @click="fanSpeed('75')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Velocidad Alta</v-btn>
                <v-btn @click="fanSpeed('100')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Velocidad Maxima</v-btn>
            </v-card>
        </v-dialog>
        <v-dialog v-model="aspas" >
            <v-card class="mx-auto" style="background-color: black;width: 600px;height: 300px;">
                <v-btn @click="verticalAspa = !verticalAspa" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Aspas Verticales</v-btn>
                <v-btn @click="horizontalAspa = !horizontalAspa" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Aspas Horizontales</v-btn>
            </v-card>
        </v-dialog>
        <v-dialog v-model="verticalAspa">
            <v-card  class="mx-auto" style="background-color: black;width: 600px;height: 300px;">
                <v-btn @click="setSwing('setVerticalSwing','auto')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento Automatica</v-btn>
                <v-btn @click="setSwing('setVerticalSwing','22')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a 22°</v-btn>
                <v-btn @click="setSwing('setVerticalSwing','45')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a 45°</v-btn>
                <v-btn @click="setSwing('setVerticalSwing','67')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a 67°</v-btn>
                <v-btn @click="setSwing('setVerticalSwing','90')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a 90°</v-btn>
            </v-card>
        </v-dialog>
        <v-dialog v-model="horizontalAspa">
            <v-card  class="mx-auto" style="background-color: black;width: 600px;height: 300px;">
                <v-btn @click="setSwing('setHorizontalSwing','auto')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento automatico</v-btn>
                <v-btn @click="setSwing('setHorizontalSwing','-90')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a -90°</v-btn>
                <v-btn @click="setSwing('setHorizontalSwing','-45')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a -45°</v-btn>
                <v-btn @click="setSwing('setHorizontalSwing','0')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a 0°</v-btn>
                <v-btn @click="setSwing('setHorizontalSwing','45')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a 45°</v-btn>
                <v-btn @click="setSwing('setHorizontalSwing','90')" style="position:relative;margin-top:20px;margin-left:150px;width: 300px;">Desplazamiento a 90°</v-btn>
            </v-card>
        </v-dialog>
    </v-container>
    
</template>

<style scoped>

.Onof {
    color: white !important;
    font-size: 11px !important;
    position: absolute;
    border-radius: 30px !important; ;
    margin-top: 15px;
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

.aire{
    position: relative;
    border-radius: 70px !important;
    display: flex;
    margin-left: 340px;
    margin-top: 40px;
    margin-bottom: -60px;
}



</style>

<script setup>
    import { ref } from "vue";
    import {DeviceApi} from "@/api/Device";
    
    const status = ref(props.device.state.status == 'on' ? true:false);
    const aspas = ref(false)
    const verticalAspa = ref(false);
    const horizontalAspa = ref(false);
    const selectingMode = ref(false);
    const selectingSpeed = ref(false)
    
    const props = defineProps({
        id: String,
        device: Object,
    });

    // Actions
    function fanSpeed(speed){
        props.device.state.fanSpeed = speed;
        DeviceApi.execute(props.id,"setFanSpeed",[speed])
        selectingSpeed.value = false;
    }

    function setMode(mode) {
        props.device.state.mode = mode;
        DeviceApi.execute(props.id,"setMode",[mode])
        selectingMode.value = false;
    }

    function subirTemp(){
        if(props.device.state.temperature < 38){
            props.device.state.temperature = props.device.state.temperature + 1;
            DeviceApi.execute(props.id,"setTemperature", [props.device.state.temperature])
        }
    }

    function bajarTemp() {
        if(props.device.state.temperature > 18){
            props.device.state.temperature = props.device.state.temperature - 1;
            DeviceApi.execute(props.id,"setTemperature",[props.device.state.temperature])
        }
    }

    function setSwing(swing,angle){
        if(swing == 'setVerticalSwing'){
            props.device.state.verticalSwing = angle;
        }
        else{
            props.device.state.horizontalSwing = angle;
        }
        DeviceApi.execute(props.id,swing,[angle])
        verticalAspa.value = false;
        horizontalAspa.value = false;
    }

    function turnOnOff(){
        if(status.value == false){
            status.value = true
            props.device.state.status = 'on'
            DeviceApi.execute(props.id,"turnOn")
            
        }
        else{
            status.value = false
            props.device.state.status = 'off'
            DeviceApi.execute(props.id,"turnOff")
        }        
    }

</script>