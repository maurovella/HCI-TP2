<template>
    <v-container>
        <v-row justify="center">
            <v-dialog
                    v-model="dialog"
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
                            @submit.prevent="onSubmit"
                    >
                        <v-text-field
                                v-model="nombre_rutina"
                                :rules="[required]"
                                class="messi"
                                clearable
                                label="Nombre de la rutina*"
                                counter
                                maxlength="20"
                        ></v-text-field>
                        
                        <AddAction/>

                        <br>

                        <v-btn
                            :disabled="!form"
                            color="blue-darken-1"
                            size="large"
                            type="submit"
                            variant="text"
                            @click="dialog = !dialog"
                            style="float: right"
                        >
                            Confirmar
                        </v-btn>
                        <v-btn
                                color="blue-darken-1"
                                size="large"
                                type="submit"
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
    import { ref } from 'vue'
    import AddAction from "@/components/AddAction.vue";    
    const dialog = ref(false);
    const form = ref(false);
    const nombre_rutina = ref(null);

    function onSubmit () {
        if (!form.value) return;
        resetForm();
    }

    function required (v) {
        return !!v || 'Field is required';
    }

    function onCancel () {
        resetForm();
        dialog.value = false;
    }

    function resetForm(){
        form.value = false;
        nombre_rutina.value = null;
    }

</script>
