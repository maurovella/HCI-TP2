<template>
    <v-container>
        <div>
            <!--<router-link class="logo ma-0 pa-0 pr-10" :to="{ name: 'LandingPage' }">SmartLiving</router-link>!-->
            <v-container>
                <v-tabs v-model="tab" background-color="primary">
                    <v-tab>Home</v-tab>
                    <v-tab>Rooms</v-tab>
                </v-tabs>
            </v-container>
        </div>


    </v-container>
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

const tab = ref('LandingPage');

</script>
