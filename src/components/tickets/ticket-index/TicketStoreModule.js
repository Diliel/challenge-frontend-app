import axios from "axios";
// set module
const module = "airline";

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchAirlines() {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/${module}/data`)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error));
            });
        },

    },
};
