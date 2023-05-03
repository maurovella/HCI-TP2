<template>
    <header>
        <router-link class = "logo ma-0 pa-0 pr-10" :to="{name : 'LandingPage'}">SmartLiving</router-link>
        <v-card>
            <v-tabs v-model="tab"
                    bg-color="blue-lighten-3"
                    centered
            >
                <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template>

                <v-app-bar-title>Navigation bar</v-app-bar-title>

                <template v-slot:append>
                    <v-btn icon="mdi-dots-vertical"></v-btn>
                </template>
            </v-tabs>
        </v-card>
    </header>
    <div>
        <div class="images">
            <img v-for="(image, index) in images" :key="index" :src="image" class="image">
        </div>
        <div class="add-image" @click="addImage">
            <span class="plus-icon">+</span>
        </div>
    </div>
</template>

<style>
    .plus-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: #ccc;
        border-radius: 50%;
        text-align: center;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
    }

    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 20px;
    }

    .image {
        width: 200px;
        height: 200px;
        margin: 10px;
        object-fit: cover;
    }

    .add-image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
</style>

<script>
    export default {
        data() {
            return {
                images: [],
                newImage: '/path/to/new/image.png',
            }
        },
        methods: {
            addImage() {
                this.images.push(this.newImage);
            },
        },
    }
</script>
