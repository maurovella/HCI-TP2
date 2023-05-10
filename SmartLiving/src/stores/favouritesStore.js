import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavouriteStore = defineStore('favourites', () => {
    const favourites = ref([])

    async function add(device) {
        favourites.push(device)
    }

    async function remove(device) {
        const found = false;
        for (let i = 0; i < favourites.length && !found; i++) {
            if (favourites[i] === device) {
                favourites.splice(i, 1);
                found = true;
            }
            
        }
    }

    return { favourites, add, remove }
})
