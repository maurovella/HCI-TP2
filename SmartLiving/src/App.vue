<template>
    <Light/>
    <NavigationBar/>
    <RouterView/>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Light from "@/components/devices/Light.vue";
</script>