<template>
    <v-container>
        <v-item v-slot="{ isSelected, toggle }">
            <v-card
                    class="mx-auto"
                    max-width="400"
            >
                <v-img
                        class="align-end text-white"
                        height="200"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        cover
                >
                    <v-card-title>Nombre Dispositivo</v-card-title>
                </v-img>
                <v-card-text>
                    <div>Descripcion Dispositivo</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange">
                        Edit
                    </v-btn>
                    <v-spacer></v-spacer>

                    <v-btn
                            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="show = !show"
                    ></v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                            no se que va a ir aca
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-item>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        show: false,
    }),
}
</script>