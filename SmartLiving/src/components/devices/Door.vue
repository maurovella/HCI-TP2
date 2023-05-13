<template>
    <v-container>
            <v-container class="container">
                <v-card class="image-container" style="display: flex; flex-direction: row-reverse;">
                    <img class="imagen" alt="Closed Door" src="../../assets/ClosedDoor.png" height="150">
                    <v-container class="button-container">
                        <v-switch label="Cerrada/Abierta"
                        :disabled="lock"
                        v-model="tipo"
                        @click="openclose"></v-switch>
                        <v-switch label="Desbloqueada/Bloqueada"
                        :disabled="tipo"
                        v-model="lock"
                        @click="lockunlock"></v-switch>

                    </v-container>
                    <v-container>
                        <v-btn dark class="state" color="orange">Obtener Estado</v-btn>
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
    const tipo = ref(false);
    const lock = ref(false);
    const props = defineProps({
        id: String,
    });
    function openclose(){
        if(tipo.value == false){
            tipo.value = true;
            DeviceApi.execute(props.id,"open");
        }else{
            tipo.value = false;
            DeviceApi.execute(props.id,"close");

        }
    }
    function lockunlock(){
        if(lock.value == false){
            lock.value = true;
            DeviceApi.execute(props.id,"lock");

        }else{
            lock.value = false;
            DeviceApi.execute(props.id,"unlock");

        }
    }
</script>