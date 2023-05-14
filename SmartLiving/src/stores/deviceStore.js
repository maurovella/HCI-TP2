import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Device, DeviceApi } from "@/api/device"

export const useDeviceStore = defineStore('device', () => {
    const devices = ref([])
    const deviceTypes = ref([])

    async function getTypes() {
        if(!deviceTypes.value.length) {
            const fetchTypes = await DeviceTypeApi.getAll();
            const typesValues = [
                {name: "Aire Acondicionado", typeId: {id: "li6cbv5sdlatti0j"}, value: "ac", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Aspiradora", typeId: {id: "ofglvd9gqx8yfl3l"}, value: "vacuum", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Lampara", typeId: {id: "go46xmbqeomjrsjr"}, value: "lamp", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Puerta", typeId: {id: "lsf78ly0eqrjbz91"}, value: "door", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
                {name: "Heladera", typeId: {id: "rnizejqr2di0okho"}, value: "refrigerator", img: "https://cdn.discordapp.com/attachments/993202630195163176/1089634068397817986/aspiradora.png"},
            ];
            const filteredTypes = fetchTypes.filter((fetchType) => typesValues.some((type) => type.value === fetchType.name));
            const updateTypes = filteredTypes.map((type) => {
                const typeValue = typesValues.find((typeValue) => typeValue.value === type.name);
                return Object.assign(type, typeValue);
            }
            );
            deviceTypes.value = updateTypes;
            return updateTypes;
        }
    }

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
    
    return { devices, deviceTypes, getTypes, add, modify, remove, get, getAll, events, state, logs, logsAll, getType, execute}

})
