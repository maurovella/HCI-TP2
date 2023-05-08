<script>
import DeviceCard from "@/components/DeviceCard.vue"
import Title from "@/components/Title.vue";

export default {
    components: {Title, DeviceCard},

}
</script>

<template>
    <Title text="Dispositivos"/>
    <v-sheet class="mx-sm-2 my-sm-5" border rounded color="primary">
        <v-slide-group show-arrows>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>
            <v-slide-group-item>
                <DeviceCard/>
            </v-slide-group-item>

        </v-slide-group>
    </v-sheet>
</template>