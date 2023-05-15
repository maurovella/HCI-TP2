<template>
    <v-container>
            <v-container class="container">
                <v-card class="image-container" style="display: flex; flex-direction: row-reverse;">
                    <img class="imagen" alt="Door" :src="doorimg" height="250">
                    <img class="imagen" alt="Candado" :src="candimg" height="100">
                    <v-container class="button-container">
                        <v-switch label="Cerrada/Abierta"
                        :disabled="lock"
                        v-model="tipo"
                        @click="openclose"/>
                        <v-switch label="Desbloqueada/Bloqueada"
                        :disabled="tipo"
                        v-model="lock"
                        @click="lockunlock"/>

                    </v-container>
                </v-card>
            </v-container>
    </v-container>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagen {
    position: relative;
    top: 30%;
    left: -15%;
}

.image-container {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 1000px;
    height: 400px;
}

.image-container img {
    display: block;
    max-width: 100%;
}

.state{
    position: relative;
    left: 80%;
    top: 45%;
}
</style>
<script setup>
    import { ref } from "vue";
    import {DeviceApi} from "@/api/Device";
    import { useDeviceStore } from "@/stores/deviceStore";

    // States
    const tipo = ref(props.device.state.status == 'open' ? true : false);
    const doorimg = ref(props.device.state.status == 'open' ? 'open_door.png' : 'ClosedDoor.png' )
    const candimg = ref(props.device.state.lock == 'lock' ? 'lock.png' : 'unlock.png' )
    const lock = ref(props.device.state.lock == "lock" ? true : false);
    
    const deviceStore = useDeviceStore()
    const props = defineProps({
        id: String,
        device: Object,
    });

    // Actions
    function openclose(){
        if(tipo.value == false){
            tipo.value = true;
            props.device.state.status = 'open';
            doorimg.value = 'open_door.png'
            DeviceApi.execute(props.id,"open");

        }else{
            tipo.value = false;
            props.device.state.status = 'close';
            doorimg.value = 'ClosedDoor.png'
            DeviceApi.execute(props.id,"close");

        }
    }

    function lockunlock(){
        if(lock.value == false){
            lock.value = true;
            props.device.state.lock = 'lock';
            candimg.value = 'lock.png'   
            DeviceApi.execute(props.id,"lock");

        }else{
            lock.value = false;
            props.device.state.lock = 'unlock';
            candimg.value = 'unlock.png'
            DeviceApi.execute(props.id,"unlock");

        }
    }

</script>
