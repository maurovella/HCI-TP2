import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Routine, RoutineApi } from "@/api/routine"

export const useRoutineStore = defineStore('routine', () => {
    const routines = ref([]);
    const actions = ref([]);
    const actionList = [
        // lamp
        { name: "turnOn", params: [] },
        { name: "turnOff", params: [] },
        { name: "setColor", params: ["color"] },
        { name: "setBrightness", params: ["brightness"] },

        // AC
        { name: "setTemperature", params: ["temperature"] },
        { name: "setMode", params: ["mode"] },
        { name: "setVerticalSwing", params: ["verticalSwing"] },
        { name: "setHorizontalSwing", params: ["horizontalSwing"] },
        { name: "setFanSpeed", params: ["fanSpeed"] },

        // Door
        { name: "open", params: [] },
        { name: "close", params: [] },
        { name: "lock", params: [] },
        { name: "unlock", params: [] },

        // Vacuum
        { name: "start", params: [] },
        { name: "pause", params: [] },
        { name: "dock", params: [] },
        { name: "setMode", params: ["mode"] },
        { name: "setLocation", params: ["roomId"] },

        // Refrigerator
        { name: "setFreezerTemperature", params: ["temperature"] },
        { name: "setTemperature", params: ["temperature"] },
        { name: "setMode", params: ["mode"] }
    ]
   

    async function add(routine) {
        const result = await RoutineApi.add(routine);
        await getAll();
        return result;
    }

    async function modify(routine) {
        const result = await RoutineApi.modify(routine);
        await getAll();
        return result;
    }

    async function remove(id) {
        const result = await RoutineApi.remove(id);
        await getAll();
        return result;
    }

    async function get(id) {
        const result = await RoutineApi.get(id);
        await getAll();
        return Object.assign(new Routine(), result);
    }

    async function getAll(controller = null) {
        let result = await RoutineApi.getAll(controller);
        result = result.map((routine) => Object.assign(new Routine(), routine));
        routines.value = result;
        return result;
    }

    async function execute(routine) {
        const result = await RoutineApi.execute(routine);
        await getAll();
        return result;
    }


    async function addAction(action) {
        actions.value.push(action)
    }

    async function clearActions() {
        actions.value = []
    }   

    async function deleteAction(index) {
        actions.value.splice(index, 1)
    }

    return { routines, add, modify, remove, get, getAll, execute , actions, addAction, clearActions, deleteAction, actionList }
})