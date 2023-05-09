import { Api } from "./api";

class HomeApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/homes${slug ? `/${slug}` : ""}`;
    }

    static async add(home, controller) {
        return await Api.post(HomeApi.getUrl(), home, controller);
    }

    static async modify(home, controller) {
        return await Api.put(HomeApi.getUrl(home.id), home, controller);
    }

    static async remove(id, controller) {
        return await Api.delete(HomeApi.getUrl(id), controller);
    }

    static async get(id, controller) {
        return await Api.get(HomeApi.getUrl(id), controller);
    }

    static async getAll(controller) {
        return await Api.get(HomeApi.getUrl(), controller);
    }

    static async getAllRooms(home, controller) {
        return await Api.get(HomeApi.getUrl(`${home.id}/rooms`),controller);
    }

    static async newRoom(home, roomId, controller) {
        return await Api.post(HomeApi.getUrl(`${home.id}/rooms/${roomId}`),controller);
    }

    static async deleteRoom(roomId,controller) {
        return await Api.delete(HomeApi.getUrl(`rooms/${roomId}`), controller)
    }
}

class Home {
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

export { HomeApi, Home };