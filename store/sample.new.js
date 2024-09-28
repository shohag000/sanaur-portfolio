import { defineStore } from 'pinia';
// import { getAllArchitectsApi } from '../services/architect/architect';

export const useArchitectsStore = defineStore('architects',() => {
    const isLoaded = ref(false);
    const data = reactive([]);

    const allArchitectsDataLoaded = computed(() => isLoaded);
    const allArchitects = computed(() => data);

    function getAllArchitects() {
        let response = [];
        try {
            // const resp = getAllArchitectsApi();
            // response = [resp.data, null];
            // this.data.value = resp.data;
            this.data.value = {};
        } catch (err) {
            response = [null, err.response];
            this.data.value = {};
        } finally {
            this.isLoaded = true;
            return response;
        }
    }

    return {
        isLoaded,
        data,
        allArchitectsDataLoaded,
        allArchitects,
        getAllArchitects,
    };
});
