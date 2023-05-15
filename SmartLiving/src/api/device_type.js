import { Api } from "./api";


class DeviceTypeApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/devicetypes${slug ? `/${slug}` : ""}`;
    }

    static async get(id, controller) {
        return await Api.get(DeviceTypeApi.getUrl(id), controller);
    }

    static async getAll(controller) {
        return await Api.get(DeviceTypeApi.getUrl(), controller);
    }
}

class DeviceType {
    constructor(id, name, powerUsage, actions, events) {
        if (id) {
            this.id = id;
        }
        this.powerUsage = powerUsage;
        this.name = name;
        this.actions = actions;
        this.events = events;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
}

export { DeviceTypeApi, DeviceType };