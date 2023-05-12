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
                <v-card-title style="color:black">Nombre Rutina</v-card-title>
            </v-img>
            <v-card-text>
                <div>Descripcion</div>
                <div>Detalles</div>
            </v-card-text>
            <v-card-actions>
                <v-btn style="position: absolute;margin-top: -45px;margin-left: 235px" 
                    icon='mdi-chevron-up'
                ></v-btn>
            </v-card-actions>
        </v-card>
    </v-btn>
</template>


<script setup>

import { ref } from "vue";
const show = ref(false);
const display = ref(false);
</script>
