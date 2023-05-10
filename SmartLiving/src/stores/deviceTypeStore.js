import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DeviceType, DeviceTypeApi } from "@/api/device_type";

export const useDeviceTypeStore = defineStore('device_type', () => {
    const device_type = ref([])

    async function get(id) {
        const result = await DeviceTypeApi.get(id);
        await getAll()
        return Object.assign(new DeviceType(), result);
    }

    async function getAll(controller = null) {
        let result = await DeviceTypeApi.getAll(controller);
        result = result.map((device_type) => Object.assign(new DeviceType(), device_type));
        device_type.value = result
        return result
    }

    return { device_type, get, getAll }
})
