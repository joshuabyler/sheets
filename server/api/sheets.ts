const getVars = () => {
    const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
    const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;
    const SHEET_RANGE = 'Sheet1!A1:G200';

    return { SPREAD_SHEET_ID, GOOGLE_API_KEY, SHEET_RANGE }
}

export default defineEventHandler(async (event) => {
    const { SPREAD_SHEET_ID, GOOGLE_API_KEY, SHEET_RANGE } = getVars();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${SHEET_RANGE}?key=${GOOGLE_API_KEY}`
    const data = await $fetch(url).catch(error => error)
    return {
        data
    }
})
