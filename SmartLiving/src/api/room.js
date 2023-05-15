import { Api } from "./api";

class RoomApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/rooms${slug ? `/${slug}` : ""}`;
    }

    static async add(room, controller) {
        return await Api.post(RoomApi.getUrl(), room, controller);
    }

    static async modify(roomId,room, controller) {
        return await Api.put(RoomApi.getUrl(roomId), room, controller);
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

    static async roomDevices(room_id, controller) {
        return await Api.get(RoomApi.getUrl(`${room_id}/devices`), controller);
    }

    static async addDevice(room_id, device_id, controller) {
        return await Api.post(RoomApi.getUrl(`${room_id}/devices/${device_id}`), room_id, controller);
    }

    static async removeDevice(room_id, deviceId, controller) {
        return await Api.delete(RoomApi.getUrl(`${room_id}/devices/${deviceId}`), controller);
    }
}

class Room {
    constructor(id, name, meta) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.meta = meta;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
}

class RoomMeta {
    constructor(type) {
        this.type = type;
    }
}
export { RoomApi, Room , RoomMeta};
