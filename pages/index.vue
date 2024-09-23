<script setup lang="ts">
import { useStore } from '@/stores'
import {onMounted} from "vue";

// access the `store` variable anywhere in the component ✨
// const sheet = await useStore().getSheet()
const store = useStore();
await store.getSheet();

const headings = ref(null)
const result = ref();
const search = ref('');

onMounted(async () => {
  headings.value = store.sheets.data.values[0]
  result.value = [...store.sheets.data.values]
  result.value.splice(0,1)
})

function lookup(key: string) {
  console.log('search');
  console.log(key);
  console.log(search.value);
}

function showMedium() {
  store.getMedium();
  result.value = [...store.visible]
}

async function reset() {
  await store.reset();
  result.value = [...store.sheets.data.values]
  result.value.splice(0,1)
}
</script>
<!-- pages/index.vue -->
<template>
  <div
      class="grid h-screen place-items-center bg-gradient-to-tr from-green-900 via-gray-900 to-green-900"
  >
    <section class="rounded-3xl border border-gray-700 bg-gray-900 text-gray-400 shadow-2xl">
      <div class="container mx-auto flex flex-col items-center px-12 py-24 md:flex-row">
        <div
            class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
        >
          <UInput color="primary" variant="outline" placeholder="Search..." @keyup="lookup" v-model="search" />
          <a @click="showMedium">Medium</a>
          <a @click="reset">Reset</a>
          <table>
            <thead>
            <tr>
              <th v-for="col in headings" :key="col" v-html="col"></th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="col in result" :key="col" >
              <td>{{col[0]}}</td>
              <td>{{col[1]}}</td>
              <td>{{col[2]}}</td>
              <td>{{col[3]}}</td>
              <td>{{col[4]}}</td>
              <td>{{col[5]}}</td>
              <td>{{col[6]}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>