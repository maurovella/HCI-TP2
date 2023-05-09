<template>
    <v-container>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="1024">
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">
                        Agregar Dispositivo
                    </v-btn>
                </template>
                <v-card class="mx-auto px-6 py-8">
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field
                            v-model="nombre_disp"
                            :rules="[required]"
                            class="messi"
                            clearable
                            label="Nombre del dispositivo*"
                            counter
                            maxlength="20"
                        ></v-text-field>

                        <v-select
                            v-model="type"
                            :items="['Aspiradora', 'Lampara', 'Puerta', 'Aire Acondicionado', 'Puerta']"
                            label="Tipo de dispositivo*"
                            :rules="[required]"
                        ></v-select>

                        <br>

                        <v-btn
                            :loading="loader"
                            :disabled="!form"
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="loader = !loader"
                            style="float: right"
                        >
                            Conectar
                        </v-btn>
                        <v-dialog v-model="loader" :scrim="false" persistent width="auto">
                            <v-card color="primary">
                                <v-card-text>
                                    Por favor espere
                                    <v-progress-linear
                                        indeterminate
                                        color="white"
                                        class="mb-0"
                                    ></v-progress-linear>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                        <v-btn
                            color="blue-darken-1"
                            size="large"
                            variant="text"
                            @click="onCancel"
                            style="float: right"
                        >
                            Cancelar
                        </v-btn>
                    </v-form>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(false);
const form = ref(null);
const nombre_disp = ref(null);
const loader = ref(null);
const type = ref(null);

const onSubmit = () => {
  loader.value = true;
  setTimeout(() => {
    loader.value = false;
    nombre_disp.value = null;
    type.value = null;
  }, 3000);
};

const onCancel = () => {
  dialog.value = false;
  nombre_disp.value = null;
  type.value = null;
};

const required = (v) => !!v || 'Field is required';

watchEffect(() => {
  if (!loader.value) {
    form.value = null;
    dialog.value = false;
  }
});
</script>

<style>
.messi{
    width: 600px;
}
</style>
