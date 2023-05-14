<template>
    <v-container>
        <h1 style="color:white;font-size: 60px;position: relative;margin-left: 420px;margin-bottom: 300px;">SmartLiving</h1>
        <h1 style="color: white;font-size: 40px;position: relative;margin-left: 350px;margin-top: -300px;">Viví Inteligente, viví mejor</h1>
        <v-container >
            <br>
            <br>
            <br>
            <p style="color: white;font-size: 20px;margin-left: -40px">¿Que dispositivos puedo conectar con SmartLiving?</p>
            <ul>
                <li style="color: white">Aire Acondicionado</li>
                <li style="color: white">Aspiradora</li>
                <li style="color: white">Heladera</li>
                <li style="color: white">Lampara</li>
                <li style="color: white">Puerta</li>
            </ul>
            <v-container>
                <v-row>
                    <v-col >
                        <img class="imagencita" src="AC.png">
                    </v-col>
                    <v-col >
                        <img class="imagencita" src="Aspiradora.png">
                    </v-col>
                    <v-col>
                        <img class="imagencita" src="Heladera.png">
                    </v-col>
                    <v-col>
                        <img class="imagencita" src="Lampara.png">
                    </v-col>
                    <v-col>
                        <img class="imagencita" src="Puerta.png">
                    </v-col>
                </v-row>
            </v-container>
            <v-btn 
                class ="btn-start"
                :to="{name: 'Residence'}"
                >Empezar ya!</v-btn>
        </v-container>
    </v-container>
</template>

<style >
body{
    background-color: #4c4592;
}
header {
    line-height: 1.5;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
}

.imagencita{
    width: 190px;
    height: 190px;
    margin-left: 10px;
    margin-top: 10px;
}

.btn-start {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color: #ff5a5f;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
}

.btn-start:hover {
  background-color: #fff;
  color: #ff5a5f;
}
</style>
