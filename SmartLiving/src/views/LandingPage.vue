<script>
import ResidenceCard from "@/components/ResidenceCard.vue";

export default {
    components: {ResidenceCard},
    data: () => ({
        habitacionDialog: false,
        rutinaDialog: false,
        form: false,
        nombre_habitacion: null,
        type: null
    }),

    methods: {
        onSubmitHabitacion () {
            if (!this.form) return
            this.resetForm();
            this.habitacionDialog = false;
        },
        onSubmitRutina () {
            if (!this.form) return
            this.resetForm();
            this.rutinaDialog = false;
        },
        required (v) {
            return !!v || 'Field is required'
        },
        onCancelHabitacion () {
            this.resetForm();
            this.habitacionDialog = false;
        },
        onCancelRutina () {
            this.resetForm();
            this.rutinaDialog = false;
        },
        resetForm(){
            this.form = false;
            this.nombre_habitacion = null;
            this.type = null;
        }
    },
}
</script>

<template>
    <v-item-group mandatory>
        <v-container>
            <h2>Favoritos</h2>
            <v-row>
                <v-col
                    v-for="n in 5"
                    :key="n"
                    cols="12"
                    md="4"
                >
                    <ResidenceCard/> <!-- Cambiar por device card !-->
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>

    <v-item-group mandatory>
        <v-container>
            <h2>Recientes</h2>
            <v-row>
                <v-col
                        v-for="n in 3"
                        :key="n"
                        cols="12"
                        md="4"
                >
                  <ResidenceCard/>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <v-item-group mandatory>
        <v-container>
            <h2>Habitaciones</h2>
            <v-row>
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
                >
                    <ResidenceCard/>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <v-container>
        <v-row justify="center">
            <v-dialog
                v-model="habitacionDialog"
                persistent
                max-width="1024"
            >
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                        Agregar habitacion
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6 py-8">

                    <v-form
                        v-model="form"
                        @submit.prevent="onSubmitHabitacion"
                    >
                        <v-text-field
                            v-model="nombre_habitacion"
                            :rules="[required]"
                            class="messi"
                            clearable
                            label="Nombre de la habitacion*"
                            counter
                            maxlength="20"
                        ></v-text-field>

                        <v-select
                            :items="['Cocina', 'Living', 'Dormitorio', 'Baño', 'Jardin', 'Oficina' ,'Otro']"
                            label="Tipo de habitacion*"
                            :rules="[required]"
                        ></v-select>

                        <br>
                        <v-btn
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="onCancelHabitacion"
                        >
                            Cancelar
                        </v-btn>
                        <v-btn
                            :disabled="!form"
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="habitacionDialog = !habitacionDialog"
                        >
                            Confirmar
                        </v-btn>
                    </v-form>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
    <v-item-group mandatory>
        <v-container>
            <h2>Rutinas</h2>
            <v-row>
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
                >
                    <ResidenceCard/>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <v-container>
        <v-row justify="center">
            <v-dialog
                v-model="rutinaDialog"
                persistent
                max-width="1024"
            >
                <template v-slot:activator="{ props }">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                        Agregar rutina
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6 py-8">

                    <v-form
                        v-model="form"
                        @submit.prevent="onSubmitRutina"
                    >
                        <v-text-field
                            v-model="nombre_habitacion"
                            :rules="[required]"
                            class="messi"
                            clearable
                            label="Nombre de la rutina*"
                            counter
                            maxlength="20"
                        ></v-text-field>

                        <v-select
                            :items="['Cocina', 'Living', 'Dormitorio', 'Baño', 'Jardin', 'Oficina' ,'Otro']"
                            label="Tipo de habitacion*"
                            :rules="[required]"
                        ></v-select>

                        <br>
                        <v-btn
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="onCancelRutina"
                        >
                            Cancelar
                        </v-btn>
                        <v-btn
                            :disabled="!form"
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="rutinaDialog = !rutinaDialog"
                        >
                            Confirmar
                        </v-btn>
                    </v-form>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<style >
.messi{
    width: 600px;
}
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
</style>
