import { defineStore } from 'pinia';

export const useStore = defineStore('main', () => {
    const filterOptions = ref();
    const formattedData = ref();
    const sheets = ref();
    const visible = ref();

    function formatData() {
        const headers = sheets.value.data.values[0];
        formattedData.value = sheets.value.data.values.map((item: Array<any>, idx: number) => {
            if (idx !== 0) {
                return Object.fromEntries(item.map((value: string, index: number) => [headers[index], value]));
            }
            return item;
        });

        // filterOptions.value = headers.map((header: string) => {
        //     return [{ label: header }]
        // })
        filterOptions.value = headers;

        /**
         * i picture this going
         * let's get rid of a loop and make it manual first then figure out the first loop
         */
        // const leaName = [];
        // const code = [];
        // const wards = [];

        // might want to go through each header and list all of its options
        // sheets.value.data.values.forEach((value: Array<any>, index: number) => {
        //     if (index === 1) {
        //         console.log(value);
        //     }
        // })
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

    return { filterOptions, formattedData, getMedium, getSheet, reset, sheets, visible, }
})