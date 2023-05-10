import { Api } from "./api";

class RoomApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/rooms${slug ? `/${slug}` : ""}`;
    }

    static async add(room, controller) {
        return await Api.post(RoomApi.getUrl(), room, controller);
    }

    static async modify(room, controller) {
        return await Api.put(RoomApi.getUrl(room.id), room, controller);
    }

    static async remove(id, controller) {
        return await Api.delete(RoomApi.getUrl(id), controller);
    }

    static async get(id, controller) {
        return await Api.get(RoomApi.getUrl(id), controller);
    }

    static async getAll(controller) {
        return await Api.get(RoomApi.getUrl(), controller);
    }

    static async roomDevices(room, controller) {
        return await Api.get(RoomApi.getUrl(`${room.id}/devices`), controller);
    }

    static async addDevice(room, deviceId,controller) {
        return await Api.post(RoomApi.getUrl(`${room.id}/devices/${deviceId}`), room, controller);
    }

    static async removeDevice(deviceId, controller) {
        return await Api.delete(RoomApi.getUrl(`devices/${deviceId}`), controller);
    }
}

class Room {
    constructor(id, name, type) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.type = type;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
}
export { RoomApi, Room };
