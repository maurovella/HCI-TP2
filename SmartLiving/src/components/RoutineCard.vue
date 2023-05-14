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
                :src="img"
                cover
            >
                <div class="delete-overlay">
                    <v-btn icon="mdi-delete" @click="onDelete"/>  
                </div>
                <div class="image-overlay">
                    <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart-outline'" @click.prevent="show = !show"/>
                </div>
                <v-card-title style="color:black">{{ name }}</v-card-title>
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
                    <v-btn style="position: absolute;margin-top: -45px" color="orange"
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
const show = ref(false);
const dialog = ref(false);
const result = ref(null)
const routineStore = useRoutineStore();

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
