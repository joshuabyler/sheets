import { defineStore } from 'pinia';

export const useStore = defineStore('main', () => {
    const sheets = ref();
    const visible = ref();
    const formattedData = ref();

    function formatData() {
        const headers = sheets.value.data.values[0];
        formattedData.value = sheets.value.data.values.map((item: Array<any>, idx: number) => {
            if (idx !== 0) {
                return Object.fromEntries(item.map((value: string, index: number) => [headers[index], value]));
            }
        })
    }

    async function getSheet() {
        const { data } = await useFetch('/api/sheets');
        sheets.value = data.value;
        visible.value = data.value;
        formatData()
    }

    function getMedium() {
        visible.value = visible.value.data.values.filter((item: string) => item[4] === 'M')
    }

    async function reset() {
        visible.value = sheets.value
    }

    return { formattedData, getMedium, getSheet, reset, sheets, visible, }
})