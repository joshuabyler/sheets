<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/stores';
const store = useStore();
const search = ref('');
const result = ref();
const filterOption = ref();
const leaOptions = ref();

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
    await store.reset();
    result.value = [...store.sheets.data.values];
    result.value.splice(0, 1);
};

const handleChange = (e: Event) => {
    console.log('handle change');
    console.log(e);
};

const handleLeaChange = (e: Event) => {
    console.log('handle lea change');
    console.log(e);
    store.filterData(e);
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
            <USelect v-model="filterOption" :options="store.filterOptions" @change="handleChange" />
            <span>Where</span>
            <USelect
                v-model="leaOptions"
                :options="store.leaName"
                @change="handleLeaChange"
            ></USelect>
        </div>
    </div>
</template>
