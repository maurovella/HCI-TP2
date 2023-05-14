<template>
    <v-container>
        <h1>Favoritos</h1>
        <v-sheet class="mx-2 my-5" border rounded color="primary">
            <v-slide-group show-arrows>
                
            </v-slide-group>
        </v-sheet>
        <h1>Rutinas</h1>
        <v-sheet class="mx-sm-2 my-sm-5" border rounded color="primary">
            <v-slide-group show-arrows>
                <div 
                    v-for="routine in routineStore.routines"
                    :key="routine.id"
                    >
                <v-slide-group-item class="ma-5 d-flex">
                    <RoutineCard :name="routine.name"/>
                </v-slide-group-item>
                </div>
            </v-slide-group>
        </v-sheet>
        <AddRoutine/>
    </v-container>
</template>

<style >
body{
    background-color: #4c4592;
}
header {
    line-height: 1.5;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
}
</style>

<script setup>

import RoutineCard from "@/components/RoutineCard.vue";
import AddRoutine from "@/components/AddRoutine.vue";
import { useRoutineStore } from "@/stores/routineStore";

const routineStore = useRoutineStore();

</script>