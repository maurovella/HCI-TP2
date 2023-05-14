<template>
    <v-btn
        color="black"
        height="280"
        width="300"
        @click="display=!display"
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
                    <v-btn :icon="show ? 'mdi-heart' : 'mdi-heart-outline'" @click.prevent="show=!show"/>
                </div>
                <v-card-title style="color:black">{{ name }}</v-card-title>
            </v-img>
        </v-card>
    </v-btn>
</template>


<script setup>

import { ref } from "vue";
import { useRoutineStore } from "@/stores/routineStore";
const show = ref(false);
const display = ref(false);
const routineStore = useRoutineStore();

const props = defineProps({
    name: String,
});

async function onDelete () {
    try {
        const routine = await routineStore.get(props.id);
        const _result = await routineStore.remove(props.id);

    }
    catch (e) {
        ;
    }
};
</script>
