<template>
    <div>
        <v-btn color="primary" @click="showForm = true">Mostrar Formulario</v-btn>
    </div>
</template>
<script setup>
import { rooms, addRoom } from '@/back/Rooms';
import RoomCard from "@/components/RoomCard.vue";
const showForm = ref(false);
const newRoomName = ref('');
const newRoomType = ref('');
const addNewRoom = () => {
  addRoom(newRoomName, newRoomType);
  newRoomName = '';
  newRoomType = '';
};

const computedRooms = () => rooms;
</script>