<template>
        <v-sheet class="nav-container" color="primary">
            <v-container fluid class="nav-content">
                <img alt="Vue Logo" src="../assets/logo.jpeg" width="50">
                <v-tabs class="text-left" v-model="tab" background-color="primary">
                    <v-tab class="tab px-15" :to="{name: 'Home'}"       value="home">Inicio</v-tab>
                    <v-tab class="tab px-15" :to="{name: 'Residence'}"  value="rooms">Habitaciones</v-tab>
                    <v-tab class="tab px-15" :to="{name: 'Device'}"     value="devices">Dispositivos</v-tab>
                    <v-tab class="tab px-15" :to="{name: 'Room'}"       value="routines">Rutinas</v-tab>
                </v-tabs>
            </v-container>
        </v-sheet>
  <!--
  <v-sheet class="nav-container py-2" color="primary">
    <div class="text-left justify-space-around">
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    Activator slot
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
  </--v-sheet>
  -->
</template>

<style>
.nav{
    background-color: rgb(211, 211, 211);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.logo {
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
}
.plus-icon {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: #ccc;
    border-radius: 50%;
    text-align: center;
    font-size: 86px;
    line-height: 20px;
    cursor: pointer;
}

.nav-container{
    display: flex;
    justify-content: space-evenly;
}

.images {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px;
}

.image {
    width: 200px;
    height: 200px;
    margin: 10px;
    object-fit: cover;
}

.add-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.nav-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const tab = ref('Home');

</script>
