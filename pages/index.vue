<script setup lang="ts">
import { useStore } from '@/stores'
import { onMounted } from "vue";

// access the `store` variable anywhere in the component ✨
// const sheet = await useStore().getSheet()
const store = useStore();
await store.getSheet();

const headings = ref()
const result = ref();

onMounted(async () => {
  headings.value = store.sheets.data.values[0].map((heading: string) => {
    return {
      key: heading,
      label: `${heading}`
    }
  })
  result.value = [...store.sheets.data.values]
  result.value.splice(0,1)
})

</script>
<!-- pages/index.vue -->
<template>
  <div
      class="grid h-screen place-items-center"
  >
    <section class="rounded-3xl">
      <div class="container mx-auto flex flex-col items-center px-12 py-24 md:flex-row">
        <div
            class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
        >
          <Filter/>
          <UTable :columns="headings" :rows="store.formattedData"></UTable>
        </div>
      </div>
    </section>
  </div>
</template>