import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Home, HomeApi } from "@/api/home"

export const useResidenceStore = defineStore('residence', () => {
    const residences = ref([])

    async function add(residence) {
        const result = await HomeApi.add(residence)
        await getAll()
        return result
    }


    async function modify(residence) {
        const result = await HomeApi.modify(residence)
        await getAll()
        return result
    }

    async function remove(id) {
        const result = await HomeApi.remove(id)
        await getAll()
        return result
    }
    async function get(id) {
        const result = await HomeApi.get(id);
        await getAll()
        return Object.assign(new Home(), result);
    }

    async function getAll(controller = null) {
        let result = await HomeApi.getAll(controller);
        result = result.map((residence) => Object.assign(new Home(), residence));
        residences.value = result
        return result
    }

    return { residences, add, modify, remove, get, getAll }
})
