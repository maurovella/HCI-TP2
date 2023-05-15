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
    constructor(id, name, actions, meta) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.actions = actions;
        this.meta = meta;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
}

class Action {
    constructor(actionName, device, params, meta) {
        if (params) {   
            this.params = params;
        }
        this.actionName = actionName;
        this.device = device;
        this.meta = meta;
    }
}

export { RoutineApi, Routine, Action };