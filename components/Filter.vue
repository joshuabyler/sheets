<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/stores';
const store = useStore();
const search = ref('');
const result = ref();
const filterOption = ref();
const leaOptions = ref();

const column = ref('');

const lookup = (key: string) => {
    console.log('search');
    console.log(key);
    console.log(search.value);
};

const showMedium = () => {
    store.getMedium();
    result.value = [...store.visible];
};

const reset = async () => {
    store.formatData();
};

const handleColumnChange = (e: string) => {
    console.log('handle change');
    console.log(e);
    column.value = e;
};

const handleLeaChange = (e: string) => {
    store.filterData({ column: column.value, value: e });
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
        <UButton @click="showMedium">Medium</UButton>
        <UButton @click="reset">Reset</UButton>

        <div class="filter__option">
            <span>Select</span>
            <USelect
                v-model="filterOption"
                :options="store.filterOptions"
                @change="handleColumnChange"
            />
            <span>Where</span>
            <USelect
                v-model="leaOptions"
                :options="store[column.value]"
                @change="handleLeaChange"
            ></USelect>
        </div>
    </div>
</template>
