@ -0,0 +1,87 @@
<template>
    <v-container>
            <v-container class="container">
                <v-card class="image-container" style="display: flex; flex-direction: row-reverse;">
                    <img class="imagen" alt="Closed Door" src="../../assets/ClosedDoor.png" height="150">
                    <v-container class="button-container">

                        <v-row>
                            <v-col>
                                <BotonPuerta class="button" />
                            </v-col>
                        </v-row>
                        <br>
                        <br>
                        <v-text class="textito" >CERRADA/ABIERTA</v-text>
                        <v-row>
                            <v-col>
                                <BotonPuerta class="button" />
                            </v-col>
                        </v-row>
                        <br>
                        <br>
                        <v-text class="textito">BLOQUEADA/DESBLOQUEADA</v-text>
                    </v-container>
                    <v-container>
                        <v-btn dark class="state" color="orange">Obtener Estado</v-btn>
                    </v-container>
                </v-card>
            </v-container>
    </v-container>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagen {
    position: relative;
    top: 30%;
    left: -15%;
}

.textito {
    position: relative;
    margin-left: -700px;
}

.image-container {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 1000px;
    height: 400px;
}


.image-container img {
    display: block;
    max-width: 100%;
}
.state{
    position: relative;
    left: 80%;
    top: 45%;
}
.button {
    position: relative;
    left: -95%;
    top: 300%;
}
</style>
<script setup>
import BotonPuerta from "@/components/BotonPuerta.vue";
</script>