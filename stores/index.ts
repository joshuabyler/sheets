import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useFetch } from '#app';

export const useStore = defineStore('main', () => {
    const alternative = ref([]);
    const code = ref([]);
    const edEmail = ref([]);
    const edName = ref([]);
    const enrollmentCap = ref([]);
    const filterOptions = ref();
    const formattedData = ref();
    const gradeBand = ref([]);
    const leaApprovalYear = ref([]);
    const leaEnrollment = ref([]);
    const leaName = ref([]);
    const leaOffice = ref([]);
    const levels = ref([]);
    const newLeader = ref([]);
    const officeNumber = ref([]);
    const residential = ref([]);
    const reviewRenewal = ref([]);
    const sheets = ref();
    const siteType = ref([]);
    const visible = ref();
    const wards = ref([]);
    const website = ref([]);
    const where = ref();

    const filterData = (item: object) => {
        formatData();
        const noFirstRow = formattedData.value;
        noFirstRow.shift();
        formattedData.value = noFirstRow.filter(
            (thing: object) => thing[item.column] === item.value
        );
    };

    const formatData = () => {
        const headers = sheets.value.data.values[0];
        formattedData.value = sheets.value.data.values.map((item: Array<never>, idx: number) => {
            if (idx !== 0) {
                return Object.fromEntries(
                    item.map((value: string, index: number) => [headers[index], value])
                );
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

        // might want to go through each header and list all of its options
        sheets.value.data.values.forEach((value: Array<never>) => {
            leaName.value.push(value[0]);
            code.value.push(value[1]);
            wards.value.push(value[2]);
            levels.value.push(value[3]);
            gradeBand.value.push(value[4]);
            siteType.value.push(value[5]);
            enrollmentCap.value.push(value[6]);
            leaEnrollment.value.push(value[7]);
            reviewRenewal.value.push(value[8]);
            edName.value.push(value[9]);
            edEmail.value.push(value[10]);
            officeNumber.value.push(value[11]);
            enrollmentCap.value.push(value[12]);
            leaEnrollment.value.push(value[13]);
            website.value.push(value[14]);
            leaOffice.value.push(value[15]);
            leaApprovalYear.value.push(value[16]);
            newLeader.value.push(value[17]);
            alternative.value.push(value[18]);
            residential.value.push(value[19]);
        });
    };

    const getSheet = async () => {
        const { data } = await useFetch('/api/sheets');
        sheets.value = data.value;
        visible.value = data.value;
        formatData();
    };

    const reset = async () => {
        visible.value = sheets.value;
    };

    const whereData = (column: Array<never>) => {
        where.value = new Set(column);
        where.value = [...where.value];
    };

    return {
        alternative,
        code,
        edEmail,
        edName,
        enrollmentCap,
        filterData,
        filterOptions,
        formattedData,
        formatData,
        getSheet,
        gradeBand,
        leaApprovalYear,
        leaEnrollment,
        leaName,
        leaOffice,
        levels,
        newLeader,
        officeNumber,
        residential,
        reset,
        reviewRenewal,
        sheets,
        siteType,
        visible,
        wards,
        website,
        where,
        whereData
    };
});
