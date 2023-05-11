<template>
    <v-container>
        <v-row justify="center">
            <v-dialog >
                <template v-slot:activator="{ props }">
                    <v-btn
                            color="primary"
                            v-bind="props"
                    >
                        Aire
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6" width="1200" height="600" style="background-color: #9c9c9c;overflow: hidden" >
                    <v-card width="500" height="800" color="white" class="aire">
                        <v-card width="400" height="200px" color="black" class="pantalla">
                            <v-card width="350" height="180" class="micropantalla" style="background-color: #9c9c9c">
                                <v-card width="370" height="4" style="background-color: black; margin-top: 40px;margin-left: -10px">

                                </v-card>

                                <v-card width="370" height="4" style="position: absolute; background-color: black; margin-top: 90px;margin-left: -10px">

                                </v-card>
                                <v-card style="position: absolute;background-color: black;margin-left: 100px" height="90" width="4">

                                </v-card>
                                <p style="position: absolute;margin-top: -43px;margin-left: 5px;font-family: 'Digital Font',emoji;font-size: 25px">Modo:</p>
                                <v-btn style="position: absolute;margin-top: -33px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji">elegir modo</v-btn>
                                <p style="position: absolute;margin-left: 11px;font-size: 60px;font-family: 'Digital Font',emoji">Off</p>
                                <p style="position: absolute;margin-left: 110px;font-size: 20px;font-family: 'Digital Font',emoji">Timer:</p>
                                <p style="position: absolute;margin-left: 180px;font-size: 60px;font-family: 'Digital Font',emoji">0:00</p>
                                <p style="position: absolute;margin-top: 105px; margin-left: 10px;font-size: 15px;font-family: 'Digital Font',emoji">Velocidad: </p>
                                <v-btn style="position: absolute;margin-top: 105px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji">elegir velocidad</v-btn>
                            </v-card>
                        </v-card>
                        <v-btn style="position: absolute;margin-top: 382px;margin-left: 50px;background-color: #726A5B ;color:white;font-size: 10px">Desplazamiento de Aspas</v-btn>
                        <v-container style="position: absolute;margin-left: 330px;margin-top: 350px ">
                            <v-btn class="pa-4 rounded-t-xl" style="margin-top: -25px;background-color: #726A5B ;color:white">Subir</v-btn>
                            <p style="margin-left: 17px">TEMP</p>
                            <v-btn class="pa-4 rounded-b-xl" style="margin-top: 5px;background-color: #726A5B ;color:white">Bajar</v-btn>
                        </v-container>

                        <v-btn class="Onof">
                            Encender/<br>Apagar
                        </v-btn>
                    </v-card>
                </v-card>
            </v-dialog>
        </v-row>

    </v-container>
</template>

<style scoped>

.Onof {
    color: white !important;
    font-size: 11px !important;
    position: absolute;
    border-radius: 30px !important; ;
    margin-top: -500px;
    margin-left: 340px;
    width: 85px !important;
    height: 50px !important;
    background-color:red !important;

}

.pantalla{
    border-radius: 20px !important;
    position: relative;
    margin-top:85px;
    margin-left:50px;
}
.micropantalla{
    border-radius: 10px !important;
    position: relative;
    margin-top: 10px;
    margin-left: 25px;
}

.aire{
    position: relative;
    border-radius: 70px !important;
    display: flex;
    justify: center;
    margin-left: 340px;
    margin-top: 40px;
    margin-bottom: -60px;
}



</style>

<script setup>
    
</script>