<template>
    <div class="text-center">
                <v-card>
                <v-container>
                    <v-row justify="center">
                        <v-col cols="auto" style="position: absolute">
                            <v-switch label="Pausar/Iniciar"
                            v-model="vacuum"
                            @click="turnOnOff"></v-switch>
                            <pre>{{ vacuum }}</pre>
                        </v-col>
                        <v-col cols="auto" sm="9">
                            <v-btn :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'" @click="isSelected=!isSelected" style="float: right"/>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn icon="mdi-delete"/>
                        </v-col>
                    </v-row>
                    <div class="d-flex align-center flex-column pa-10">
                        <v-btn-toggle
                                v-model="toggle"
                                divided
                                variant="outlined"
                        >
                            <v-btn>Aspirar</v-btn>
                            <v-btn>Trapear</v-btn>
                        </v-btn-toggle>
                    </div>
                    <img alt="vaccum" class="vaccum" src="https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png" width="125" style="">
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-btn
                                    height="72"
                                    min-width="164"
                            >
                                Cambiar ubicacion base de carga
                            </v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                                    height="72"
                                    min-width="164"
                            >
                                Regresar a base de carga
                            </v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                                    height="72"
                                    min-width="164"
                            >
                                Cambiar ubicacion
                            </v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                                    height="72"
                                    min-width="164"
                            >
                                Obtener estado
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
    </div>

</template>

<script setup>
    import { ref } from 'vue';
    import {DeviceApi} from "@/api/Device";
    const isSelected = ref(false);
    const toggle = ref(0);
    const vacuum = ref(false);
    const props = defineProps({
        id: String,
    }
);
    function turnOnOff(){
        if(vacuum.value == true){
            vacuum.value = false;
            DeviceApi.execute(props.id,"pause");
        } else{
            vacuum.value = true;
            DeviceApi.execute(props.id,"start");
        }
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