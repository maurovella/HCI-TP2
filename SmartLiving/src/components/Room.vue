<template>
    <div>
        <v-btn color="primary" @click="showForm = true">Mostrar Formulario</v-btn>
    </div>
</template>
<script>
import { rooms, addRoom } from '@/back/Rooms';
import RoomCard from "@/components/RoomCard.vue";
export default {
    components: {RoomCard},
    data() {
        return {
            newRoomName: '',
            newRoomType: '',
            showForm: false
        };
    },
    computed: {
        rooms() {
            return rooms;
        }
    },
    methods: {
        addNewRoom() {
            addRoom(this.newRoomName, this.newRoomType);
            this.newRoomName = '';
            this.newRoomType = '';
        }
    }
}
</script>