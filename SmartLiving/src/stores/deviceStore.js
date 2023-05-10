import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Device, DeviceApi } from "@/api/device"

export const useDeviceStore = defineStore('device', () => {
    const devices = ref([])

    async function add(device) {
        const result = await DeviceApi.add(device)
        await getAll()
        return result
    }

    async function modify(device) {
        const result = await DeviceApi.modify(device)
        await getAll()
        return result
    }

    async function remove(id) {
        const result = await DeviceApi.remove(id)
        await getAll()
        return result
    }

    async function get(id) {
        const result = await DeviceApi.get(id);
        await getAll()
        return Object.assign(new Device(), result);
    }

    async function execute(device, action) {
        const result = await DeviceApi.execute(device, action);
        await getAll();
        return result
    }

    async function getType(typeId) {
        const result = await DeviceApi.getType(typeId);
        await getAll();
        return result;
    }

    async function logs(device, limit, offset) {
        const result = await DeviceApi.logs(device, limit, offset);
        await getAll();
        return result;
    }

    async function logsAll(limit, offset) {
        const result = await DeviceApi.logsAll(limit, offset);
        await getAll();
        return result;
    }

    async function state(device) {
        const result = await DeviceApi.state(device)
        await getAll();
        return result;
    }

    async function events() {
        const result = await DeviceApi.events();
        await getAll();
        return result;
    }

    async function getAll(controller = null) {
        let result = await DeviceApi.getAll(controller);
        result = result.map((device) => Object.assign(new Device(), device));
        devices.value = result;
        return result;
    }

    
    return { devices, add, modify, remove, get, getAll, events, state, logs, logsAll, getType, execute}
})