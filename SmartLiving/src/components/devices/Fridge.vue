<template>

    <v-container>
        <v-row justify="center">
            <v-dialog >
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">
                        Heladera
                    </v-btn>

                </template>

                <v-card class="mx-auto px-6" height="600" style="background-color: #9c9c9c;overflow: hidden" box-sizing="border-box">
                    <v-card class="fridge mx-auto">
                        <v-card width="310" height="180" class="micropantalla" style="margin-top: 20px; background-color: #9c9c9c; border-radius: 30px;">
                            <v-card width="370" height="4" style="background-color: black; margin-top: 40px;margin-left: -10px"></v-card>
                            <v-card width="370" height="4" style="position: absolute; background-color: black; margin-top: 90px;margin-left: -10px"></v-card>
                            
                            <v-btn style="position: absolute;margin-top: -33px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji">Cambiar Modo</v-btn>
                            <v-btn style="position: absolute;margin-top: 105px;margin-left: 80px;height: 20px;width: 140px;font-size: 10px;font-family: 'Digital Font',emoji">Obtener Estado</v-btn>
                        </v-card>

                        <v-container style="position: absolute;margin-left: 30px;margin-top: 300px ">
                            <v-btn class="pa-4 rounded-t-xl" style="margin-top: -25px;background-color: #726A5B ;color:white">Subir</v-btn>
                            <p style="margin-left: 20px">TEMP</p>
                            <p style="margin-left: 5px">FREEZER</p>
                            <v-btn class="pa-4 rounded-b-xl" style="margin-top: 5px;background-color: #726A5B ;color:white">Bajar</v-btn>
                        </v-container>

                        <v-container style="position: absolute;margin-left: 210px;margin-top: 300px ">
                            <v-btn class="pa-4 rounded-t-xl" style="margin-top: -25px;background-color: #726A5B ;color:white">Subir</v-btn>
                            <p style="margin-left: 20px">TEMP</p>
                            <p style="margin-left: -1px">HELADERA</p>
                            <v-btn class="pa-4 rounded-b-xl" style="margin-top: 5px;background-color: #726A5B ;color:white">Bajar</v-btn>
                        </v-container>

                    </v-card>
                </v-card>
            </v-dialog>
        </v-row>

    </v-container>

</template>


<style scoped>

.fridge {
    position: relative;
    border-radius: 30px !important;
    display: flex;
    margin-left: 340px;
    margin-top: 40px;
    margin-bottom: -60px;
    color: darkgrey !important;
    height: 500px;
    width: 360px;
    box-sizing: border-box;
}
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

</style>