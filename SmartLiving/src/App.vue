<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import 'vuetify/styles'

const selection = ref([]);
const items = [
    {
        src: 'backgrounds/bg.jpg',
    },
    {
        src: 'backgrounds/md.jpg',
    },
    {
        src: 'backgrounds/bg-2.jpg',
    },
    {
        src: 'backgrounds/md2.jpg',
    },
];
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

        <div class="wrapper">
            <HelloWorld msg="SmartLiving" />
        </div>
    </header>

    <main>
        <v-item-group mandatory>
            <v-container>
                <v-row>
                    <v-col
                        v-for="n in 3"
                        :key="n"
                        cols="12"
                        md="4"
                    >
                        <v-item v-slot="{ isSelected, toggle }">
                            <v-card
                                :color="isSelected ? 'primary' : ''"
                                class="d-flex align-center"
                                dark
                                height="200"
                                @click="toggle"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                            >
                                <v-scroll-y-transition>
                                    <div
                                        class="text-h3 flex-grow-1 text-center"
                                    >
                                        {{ isSelected ? 'Ja PT' : 'Click Me!' }}
                                    </div>
                                </v-scroll-y-transition>
                            </v-card>
                        </v-item>
                        <div class="text-h5 flex-grow-1 text-center">
                            Nombre Residencia
                        </div>
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
