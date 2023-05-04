<template>
  Habitaciones
  <RoomCard/>
  <RoomDialogue/>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
import RoomDialogue from "@/components/RoomDialogue.vue";

export default {
    components: {RoomDialogue, RoomCard},
    data: () => ({
        dialog: false,
        dialog1: false,
    }),
}
</script>

<style>

</style>

