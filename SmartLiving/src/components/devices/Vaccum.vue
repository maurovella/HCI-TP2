<template>
    <div class="text-center" >
                <v-card class="mx-auto" style="background-color: #9c9c9c" height="600" width="1200">
                    <p>Status:{{  props.device.state.status  }}<br>
                        Mode:{{  props.device.state.mode  }}<br>
                        Bateria:{{  props.device.state.batteryLevel  }}<br>
                        Habitacion:{{  roomname  }}<br></p>
                <v-container>
                    <v-row justify="center">
                        <v-col cols="auto" style="position: absolute">
                            <v-switch label="Pausar/Iniciar"
                            :disabled="props.device.state.batteryLevel < 5"
                            v-model="vacuum"
                            @click="turnOnOff"></v-switch>
                        </v-col>
                    </v-row>
                    <div class="d-flex align-center flex-column pa-10">
                            <v-btn @click="mode= !mode">Seleccionar Modo</v-btn>
                    </div>
                    <img alt="vaccum" class="vaccum" src="https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png" width="125" style="">
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-btn
                                    height="72"
                                    min-width="164"
                                    @click="newLocation = !newLocation"
                            >
                                Cambiar ubicacion base de carga
                            </v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                                    height="72"
                                    min-width="164"
                                    @click="cargar"
                                    :disabled="roomname == 'Sin ubicacion'"
                            >
                                Regresar a base de carga
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
            <v-dialog v-model="mode">
                <v-card class="mx-auto" style="height:140px;width:400px;background-color: black;">
                    <v-btn style="margin-top: 20px;width: 200px;margin-left: 100px;" @click="aspirar">Aspirar</v-btn>
                    <v-btn style="margin-top: 20px;width: 200px;margin-left: 100px;" @click="trapear">Trapear</v-btn>
                </v-card>
            </v-dialog>
            <v-dialog v-model="newLocation">
                <v-card class="mx-auto" style="height:200px;width:400px;background-color: black;">
                    <!--Mostrar todas las habitaciones disponibles (hacer un for sobre roomStore.rooms) como botones-->
                    <div 
                    v-for="room in roomStore.rooms"
                    :key="room.id"
                    >
                        <v-btn style="margin-top: 20px;width: 200px;margin-left: 100px;" @click="roomname = room.name; newLocation = false;setLocation(room.id)">{{room.name}}</v-btn>
                    </div>
                </v-card>
            </v-dialog>
    </div>

</template>

<script setup>
    import { ref } from 'vue';
    import {DeviceApi} from "@/api/Device";
    import { computed } from '@vue/reactivity';
    import { useDeviceStore } from '@/stores/deviceStore';
    import { useRoomStore } from '@/stores/roomStore';
    import {  onMounted } from 'vue';
    const deviceStore = useDeviceStore();
    const roomStore = useRoomStore();
    const newLocation = ref(false);
    const isSelected = ref(false);
    const mode = ref(false);
    const roomname = ref(props.device.state.location == null ? "Sin ubicacion" : props.device.state.location.name);
    const vacuum = ref(props.device.state.status == "active" ? true : false);
    const batteryLevel = ref(props.device.state.batteryLevel);
    const props = defineProps({
        id: String,
        roomId: String,
        device: Object
    }
);
    function turnOnOff(){
        if(vacuum.value == false && props.device.state.batteryLevel > 5){
            vacuum.value = true;
            props.device.state.status = "active";
            DeviceApi.execute(props.id,"start");
        } else{
            vacuum.value = false;
            props.device.state.status = "inactive";
            DeviceApi.execute(props.id,"pause");
        }
    }

    function cargar(){
        props.device.state.status = "docked";
        vacuum.value = false;
        DeviceApi.execute(props.id,"dock");
    }

    function aspirar(){
        mode.value = false;
        props.device.state.mode = "vacuum";
        DeviceApi.execute(props.id,"setMode",['vacuum']);
    }

    function trapear(){
        mode.value = false;
        props.device.state.mode = "mop";
        DeviceApi.execute(props.id,"setMode",['mop']);
    }

    function setLocation(id){
        DeviceApi.execute(props.id,"setLocation",[id]);
    }

</script>

<style>
.heart{
    position: absolute;
    bottom: 150px;
    left: 75%;
    transform: translate(0%, 0%);
}

.vaccum{
    position: absolute;
    bottom: 44%;
    left: 10%;
    transform: translate(0%, 0%);
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #009900;
}

input:focus + .slider {
    box-shadow: 0 0 1px #009900;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>