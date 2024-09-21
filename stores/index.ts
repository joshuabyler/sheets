import { defineStore } from 'pinia';

export const useStore = defineStore('main', () => {
    const sheets = ref();

    async function getSheet() {
        const { data } = await useFetch('/api/sheets');
        sheets.value = data.value;
    }

    return { sheets, getSheet }
})