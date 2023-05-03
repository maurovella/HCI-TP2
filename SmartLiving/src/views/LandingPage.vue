<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import 'vuetify/styles'
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"/>
        <div class="wrapper">
            <HelloWorld msg="SmartLiving" />
        </div>
    </header>

    <main>
        <v-item-group mandatory>
            <v-container class="example">
                <v-row>
                    <v-col
                            v-for="n in 3"
                            :key="n"
                            cols="12"
                            md="4"
                    >
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
                                    <v-card-title>Nombre Residencia</v-card-title>
                                </v-img>
                                <v-card-text>
                                    <div>Descripcion residencia</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="orange">
                                        Edit
                                    </v-btn>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                            icon='mdi-chevron-up'
                                    ></v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}

</style>
