import { Api } from "./api";

class RoutineApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${slug ? `/${slug}` : ""}`;
    }

    static async add(routine, controller) {
        return await Api.post(RoutineApi.getUrl(), routine, controller);
    }

    static async modify(routine, controller) {
        return await Api.put(RoutineApi.getUrl(routine.id), routine, controller);
    }

    static async execute(routine, controller) {
        return await Api.put(RoutineApi.getUrl(`${routine.id}/execute`), routine, controller);
    }

    static async remove(id, controller) {
        return await Api.delete(RoutineApi.getUrl(id), controller);
    }

    static async get(id, controller) {
        return await Api.get(RoutineApi.getUrl(id), controller);
    }

    static async getAll(controller) {
        return await Api.get(RoutineApi.getUrl(), controller);
    }
}

class Routine {
    constructor(id, name, devices, meta) {
        if (id) {
            this.id = id;
        }
        this.devices = devices;
        this.name = name;
        this.meta = meta;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
}

export { RoutineApi, Routine };