<template>
    <v-btn
        color="black"
        height="280"
        width="300"
        @click="dialog = !dialog"
    >
        <v-card
            class="mx-auto"
            width="300"
            elevation="3"
        >
            <v-img
                class="align-end text-white"
                height="200"
                src="rutina.png"
                cover
            >
            <div class="delete-overlay">
                    <v-dialog
                        v-model="checkDelete"
                        persistent
                        width="1024">
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">¿Está seguro que desea eliminar la rutina?</span>
                            </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    type="submit"
                                    @click="checkDelete = false"
                                    style="float: right"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    type="submit"
                                    @click="onDelete"
                                    style="float: right"
                                >
                                    Confirmar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-btn icon="mdi-delete" @click.stop="checkDelete = !checkDelete"/>  
                </div>
                <div class="image-overlay">
                    <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart-outline'" @click.prevent="show = !show"/>
                </div>
                <v-card-title style="color:black;background-color: white;">{{ name }}</v-card-title>
            </v-img>
            
        
            <v-expand-transition>
                <v-dialog
                    v-model="dialog"
                    width="1024">
                    <v-card>
                        <v-card-title style="color:black">Rutina: {{ name }}</v-card-title>
                        <v-card-item
                            v-for="(action, index) in actions"
                            :key="index"
                            >
                            <v-card-title justify="center">
                                <p class="mt-1">                                    
                                    {{ action.device.name }} 
                                    <v-icon icon="mdi-arrow-right-circle"/>
                                    {{ action.actionName }}
                                </p>
                            </v-card-title>
                        </v-card-item>

                        <v-card-actions class="justify-center mt-4">
                            <div>
                                <v-btn
                                    color="blue-darken-1"
                                    variant="text"
                                    type="submit"
                                    @click="dialog = false"
                                >
                                    Salir
                                </v-btn>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-expand-transition>
            
            <v-card-actions>
                <div> 
                    <v-btn style="position: absolute;margin-top: -20px;background-color: #535211;" color="orange"
                    @click="onExecute">
                        Ejecutar
                    </v-btn>
                </div>
            </v-card-actions>

        </v-card>
    </v-btn>
</template>


<script setup>

import { ref, computed } from "vue";
import { useRoutineStore } from "@/stores/routineStore";
import { useDeviceStore } from "../stores/deviceStore";
const show = ref(false);
const dialog = ref(false);
const result = ref(null)
const routineStore = useRoutineStore();
const deviceStore = useDeviceStore();
const checkDelete = ref(false);

const props = defineProps({
    name: String,
    id: String,
    actions: [String],
});

async function onDelete () {
    try {
        const result = await routineStore.remove(props.id);
        setResult(result);
    }
    catch (e) {
        setResult(e);
    }
};

function onClick () {
    dialog.value = !dialog.value;
}

function setResult(r) {
    result.value = JSON.stringify(r, null, 2)
}

async function onExecute(event){
    event.stopPropagation(); // Prevent click event propagation
    let _routine = await routineStore.get(props.id)
    const result = routineStore.execute(_routine)
}

const deviceNameMap = new Map();

</script>
