@ -0,0 +1,68 @@
<template>
    <v-dialog>
        <template v-slot:activator="{ props }">
            <v-btn
                    color="primary"
                    v-bind="props"
            >
                Lampara
            </v-btn>
        </template>
        <v-card class="mx-auto" style="background-color: #9c9c9c" height="600" width="1200">
            <img src="myImage" width="300" style="position: absolute; margin-top: -10px;margin-left: 450px">
            <v-dialog>
                <template v-slot:activator="{ props }">
                    <v-btn
                            color="white"
                            v-bind="props"
                            width="200px"
                            style="margin-top: 250px;margin-left: 900px"
                    >
                        Elegir Color
                    </v-btn>
                </template>
                <v-card class="mx-auto" style="background-color: white;height: 329px;width: 300px;justify-self: center">
                    <v-color-picker></v-color-picker>
                </v-card>
            </v-dialog>
            <v-switch
                    color="green"
                    v-model="model"
                    hide-details
                    true-value="Encendido"
                    false-value="Apagado"
                    :label="`${model}`"
                    style="position: absolute;margin-top: 245px;margin-left: 150px;color:white"
            ></v-switch>
            <v-slider style="position: absolute;margin-top: 350px;margin-left: 450px;width: 300px"
                      v-model="slider1"
                      thumb-color="yellow"
                      track-color="black"
                      track-fill-color="yellow"
                      thumb-label
                      @click="onSwitch"
            ></v-slider>
        </v-card>

    </v-dialog>
</template>
<script>
export default {
    data() {
        return {
            model: 'Apagado',
            slider1: 0,
            imagen: '../assets/Apagada.png'
        }
    },
    methods: {
        onSwitch() {
            this.imagen = this.model === 'Apagado' ? '../assets/Apagada.png' : '../assets/Prendida.png';
            this.$refs.myImage.src = this.imagen;
        },
    }
}
</script>
<style>

</style>