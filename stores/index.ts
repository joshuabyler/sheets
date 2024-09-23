import { defineStore } from 'pinia';

export const useStore = defineStore('main', () => {
    const sheets = ref();
    const visible = ref();

    async function getSheet() {
        const { data } = await useFetch('/api/sheets');
        sheets.value = data.value;
        visible.value = data.value;
    }

    function getMedium() {
        visible.value = visible.value.data.values.filter((item: string) => item[4] === 'M')
    }

    async function reset() {
        visible.value = sheets.value
    }

    return { getMedium, getSheet, reset, sheets, visible, }
})