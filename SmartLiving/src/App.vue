<template>
    <NavigationBar/>
    <Vaccum/>
    <RouterView/>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Vaccum from "./devices/Vaccum.vue";
</script>