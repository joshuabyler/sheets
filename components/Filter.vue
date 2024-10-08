<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/stores';
import { camalCase, columnNames } from '@/composables/useHelper';

const store = useStore();
const search = ref('');
const filterOption = ref();
const leaOptions = ref();
const options = ref([]);

const column = ref('');

const lookup = (key: string) => {
    console.log('search');
    console.log(key);
    console.log(search.value);
};

const reset = () => {
    store.formatData();
};

const handleColumnChange = (e: string) => {
    column.value = camalCase(e);
    options.value = store[column.value];
    store.whereData(store[column.value]);
};

const handleWhere = (e: string) => {
    store.filterData({ column: columnNames[column.value], value: e });
};
</script>

<template>
    <div class="filter">
        <p>filter</p>
        <UInput
            color="primary"
            variant="outline"
            placeholder="Search..."
            @keyup="lookup"
            v-model="search"
        />
        <UButton @click="reset">Reset</UButton>

        <div class="filter__option">
            <span>Select</span>
            <USelect
                v-model="filterOption"
                :options="store.filterOptions"
                @change="handleColumnChange"
            />
            <span>Where</span>
            <USelect v-model="leaOptions" :options="store.where" @change="handleWhere"></USelect>
        </div>
    </div>
</template>
