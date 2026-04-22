<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const selected = ref([]);
const sortKey = ref(null);
const sortAsc = ref(true);

const emit = defineEmits(["selected", "sort"]);

const props = defineProps({
  select: {
    type: Boolean,
    default: false,
  },
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

// Sorting logic (emit only, no local sorting)
function sortBy(key) {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortKey.value = key;
    sortAsc.value = true;
  }

  emit("sort", {by: sortKey.value, order: sortAsc.value ? "asc" : "desc"});
}

// Selection logic
function selectAll(e) {
  if (e.target.checked) {
    selected.value = props.rows.map((row) => row.id);
  } else {
    selected.value = [];
  }
  emit("selected", selected.value);
}

function selectSingle(e, id) {
  if (e.target.checked) {
    if (!selected.value.includes(id)) {
      selected.value.push(id);
    }
  } else {
    selected.value = selected.value.filter((item) => item !== id);
  }
  emit("selected", selected.value);
}

// Reset selection when rows change
watch(
  () => props.rows,
  () => {
    selected.value = [];
  }
);

function checkType(value) {
  if (Array.isArray(value)) {
    return "Array";
  } else if (value !== null && typeof value === "object") {
    return "Object";
  } else {
    return "Neither";
  }
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 bg-white" :id="id">
      <thead class="bg-[#EFF5F9]">
        <tr>
          <th v-if="select" class="px-4 py-3 text-left text-sm font-medium select-none border-e border-[#D1D1D1] w-[20px]">
            <input type="checkbox" :checked="selected.length === props.rows.length && props.rows.length > 0" @change="selectAll" />
          </th>

          <th v-for="column in props.columns" :key="column.key" @click="column.key !== 'actions' && sortBy(column.key)" class="border-e border-[#D1D1D1] last:border-e-0 px-4 py-3 text-left text-sm font-medium text-[#7D8E9A] select-none table-head">
            <div class="flex items-center gap-1" :data-popover="column.tooltips ? column.tooltips : ''" v-popover>
              {{ column?.label ? column.label : "" }}
              <font-awesome-icon :icon="column?.icon" class="text-sm" v-if="column?.icon" />
              <!-- <span v-if="sortKey === column.key" class="cursor-pointer">
                <font-awesome-icon :icon="['fa-light', 'fa-sort-up']" v-if="sortAsc" />
                <font-awesome-icon :icon="['fa-light', 'fa-sort-down']" v-else />
              </span> -->
            </div>
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-100">
        <tr v-for="(row, rowIndex) in props.rows" :key="rowIndex" class="odd:bg-gray-50 hover:bg-gray-100" :id="id + '-' + row.id">
          <th v-if="select" class="px-4 py-3 text-left text-sm font-medium select-none border-e border-[#D1D1D1] last:border-e-0">
            <input class="tab-checkbox" type="checkbox" :value="row.id" :checked="selected.includes(row.id)" @change="(e) => selectSingle(e, row.id)" />
          </th>
          <td
            v-for="column in props.columns"
            :key="column.key"
            class="px-4 py-2 text-xs border-e border-[#D1D1D1] last:border-e-0 font-normal whitespace-nowrap"
            :class="{
              'text-center': column.alignContent == 'center',
            }"
          >
            <slot :name="column.key" :row="row" :index="rowIndex">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>

        <tr v-if="!rows?.length && checkType(rows) == 'Array'">
          <td :colspan="props.columns.length + (select ? 1 : 0)" class="px-4 py-4 text-center text-sm">No Data Available.</td>
        </tr>

        <tr v-if="Object.keys(rows)?.length < 0 && checkType(rows) == 'Object'">
          <td :colspan="props.columns.length + (select ? 1 : 0)" class="px-4 py-4 text-center text-sm">No Data Available.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
