<template>
    <div>
        <table>
            <!-- The `thead` section includes the table header row -->
            <thead><tr><th>Name</th><th>Index</th></tr></thead>
            <!-- The `tbody` section includes the data rows -->
            <tbody>
                <!-- generate row (TR) for each president -->
                <tr v-for="(row, idx) in pres" :key="idx">
                    <td>{{ row.Name }}</td>
                    <td>{{ row.Index }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="exportFile">Export XLSX</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { read, utils, writeFileXLSX } from 'xlsx';

interface President {
  Name: string;
  Index: number;
}

/* the component state is an array of presidents */
const pres = ref<President[]>([]);

/* get state data and export to XLSX */
function exportFile() {
  console.log("Initiating export...");
  /* generate worksheet from state */
  const ws = utils.json_to_sheet(pres.value);
  console.log('Imprimiendo ws:\n', ws)
  /* create workbook and append worksheet */
  const wb = utils.book_new();
  console.log('Imprimiendo wb:\n', wb)
  utils.book_append_sheet(wb, ws, "Data");
  console.log('Imprimiendo wb modificado:\n', wb)
  /* export to XLSX */
  writeFileXLSX(wb, "SheetJSVueAoO.xlsx");
}

/* Fetch and update the state once */
onMounted(async() => {
  /* Download from https://docs.sheetjs.com/pres.numbers */
  const f = await fetch("https://docs.sheetjs.com/pres.numbers");
  console.log('Imprimiendo f:\n', f)
  const ab = await f.arrayBuffer();
  console.log ('Imprimiendo ab:\n', ab)

  /* parse */
  const wb = read(ab);
  console.log('Imprimiendo wb:\n', wb)


  /* generate array of presidents from the first worksheet */
  const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  console.log('Imprimiendo ws:\n', ws)
  const data: President[] = utils.sheet_to_json<President>(ws); // generate objects
  console.log('Imprimiendo data:\n', data)

  /* update state */
  pres.value = data;
});
</script>

<style scoped>

</style>