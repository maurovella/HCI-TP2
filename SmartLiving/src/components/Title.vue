<script setup>

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    isTitle: {
        type: Boolean,
        required: false,
        default: false  // default is subtitle
                    // no lo estamos usando x ahora pero podriamos hacer diferencia entre titulo y subtitulo

    }
})

</script>

<template>
    <v-sheet
            class="d-flex ml-4 mr-4 mb-2 mt-4"
            color= #4c4592
            height="18*4"
            max-width="96%"
            width="100%"
            rounded
    >
        <h4 class="text-h4 font-italic font-weight-bold">
            {{ props.text }}
        </h4>
    </v-sheet>
</template>

<style scoped>

</style>
