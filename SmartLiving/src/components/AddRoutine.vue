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
                                :rules="[name_rules]"
                                class="messi"
                                clearable
                                label="Nombre de la rutina*"
                                counter
                                maxlength="60"
                        ></v-text-field>

                        <AddAction/>

                        <br>

                        <v-btn
                            :disabled="routineStore.actions.length == 0 || !form"
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
    import { useRoutineStore } from '../stores/routineStore';
    import { Routine } from "@/api/routine.js";
    import { useDeviceStore } from "@/stores/deviceStore";
    const dialog = ref(false);
    const form = ref(false);
    const nombre_rutina = ref(null);
    const routineStore = useRoutineStore();
    
    function onSubmit () {
        if (!form.value) return;
        const actions = routineStore.actions;
        routineStore.add(new Routine(null,`${nombre_rutina.value}`, actions, null));
        resetForm();
    }

    function name_rules(v) {
    const regex = /^[a-zA-Z0-9_\s]+$/;
    required(v);
    if (v.length < 3 || v.length > 60) {
        return 'Name must be 3-60 characters long';
    }
    if (!regex.test(v)) {
        return 'Only letters, numbers, underscore, and space are allowed';
    }
    return true;
}

function required(v) {
    return !!v || 'Field is required';
}

    function onCancel () {
        resetForm();
        dialog.value = false;
    }

    function resetForm(){
        form.value = false;
        nombre_rutina.value = null;
        routineStore.clearActions();
    }

</script>
