<script>
import ResidenceCard from "@/components/ResidenceCard.vue";

export default {
    components: {ResidenceCard},

}
</script>

<template>
        <v-item-group mandatory>
            <v-container>
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
