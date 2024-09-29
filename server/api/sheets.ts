import { useRuntimeConfig } from '#imports';

const getVars = () => {
    const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
    const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;
    const SHEET_RANGE = 'LEA General!A1:S200';

    return { SPREAD_SHEET_ID, GOOGLE_API_KEY, SHEET_RANGE };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineEventHandler(async event => {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY, SHEET_RANGE } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${SHEET_RANGE}?key=${GOOGLE_API_KEY}`;
    const data = await $fetch(url).catch(error => error);
    return {
        data
    };
});
