import { Api } from "./api";

class DeviceApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/devices${slug ? `/${slug}` : ""}`;
    }

    static async logsAll(limit, offset, controller) {
        return await Api.get(DeviceApi.getUrl(`logs/limit/${limit}/offset/${offset}`), limit , offset, controller);
    }

    static async events(controller){
        return await Api.get(DeviceApi.getUrl('events'),controller)
    }

    static async state(deviceId, controller) {
        return await Api.get(DeviceApi.getUrl(`${deviceId}/state`),controller)
    }

    static async logs(device,limit,offset,controller) {
        return await Api.get(DeviceApi.getUrl(`${device.id}/logs/limit/${limit}/offset/${offset}`),controller)
    }

    static async getType(typeId, controller) {
        return await Api.get(DeviceApi.getUrl(`devicesType/${typeId}`),controller)
    }

    static async execute(deviceId, action, args ,controller) {
        return await Api.put(DeviceApi.getUrl(`${deviceId}/${action}`),args ,controller)
    }

    static async add(device, controller) {
        return await Api.post(DeviceApi.getUrl(), device, controller);
    }

    static async modify(device, controller) {
        return await Api.put(DeviceApi.getUrl(device.id), device, controller);
    }

    static async remove(id, controller) {
        return await Api.delete(DeviceApi.getUrl(id), controller);
    }

    static async get(id, controller) {
        return await Api.get(DeviceApi.getUrl(id), controller);
    }

    static async getAll(controller) {
        return await Api.get(DeviceApi.getUrl(), controller);
    }
}

class Device {
    constructor(id, type, name, meta, state, room) {
        if (id) {
            this.id = id;
        }
        this.type = type;
        this.name = name;
        this.meta = meta;
        this.state = state;
        this.room = room;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
}

export { DeviceApi, Device };