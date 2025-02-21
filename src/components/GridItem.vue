<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, computed } from 'vue'
type TableRow<T extends string> = Record<T, any>
interface TableProps<T extends string> {
  head: T[]
  body: TableRow<T>[]
  search: string
}

const props = defineProps<TableProps<string>>()
const sortKey = ref('name')
const sortOrder = ref<'asc' | 'desc'>('asc')

const isAsc = computed(() => sortOrder.value === 'asc')
const filteredBody = computed(() => {
  let body = props.body

  if (props.search) {
    body = body.filter((row) =>
      Object.values(row).some((value) => value.toString().includes(props.search)),
    )
  }

  if (sortKey.value) {
    body.sort((lhs, rhs) => {
      const lhsValue = lhs[sortKey.value]
      const rhsValue = rhs[sortKey.value]

      if (typeof lhsValue === 'number' && typeof rhsValue === 'number') {
        return sortOrder.value === 'asc' ? lhsValue - rhsValue : rhsValue - lhsValue
      } else {
        return sortOrder.value === 'asc'
          ? lhsValue.toString().localeCompare(rhsValue.toString())
          : rhsValue.toString().localeCompare(lhsValue.toString())
      }
    })
  }

  return body
})

const activeHead = ref('')
function setActive(head: string) {
  activeHead.value = head
  if (sortOrder.value === 'asc') {
    sortOrder.value = 'desc'
  } else {
    sortOrder.value = 'asc'
  }
}
</script>

<template>
  <table>
    <thead>
      <th
        @click="setActive(head)"
        :class="{ active: head == activeHead }"
        v-for="(head, index) in props.head"
        :key="index"
      >
        {{ head }}
        <span class="arrow" :class="{ asc: isAsc, desc: !isAsc }"></span>
      </th>
    </thead>
    <tbody>
      <tr v-for="(body, index1) in filteredBody" :key="index1">
        <td v-for="(head, index2) in props.head" :key="index2">
          {{ body[head] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
table {
  margin-top: 5px;
  border: 1px solid var(--primary-string-color);
  width: 400px;

  thead {
    th {
      background-color: var(--primary-string-color);
      color: rgba(255, 255, 255, 0.6);
      padding: 15px;

      &::first-letter {
        text-transform: uppercase;
      }

      &:hover {
        cursor: pointer;
      }
    }

    th.active {
      color: #ffffff;

      .arrow {
        opacity: 1;
      }
    }
  }

  tbody {
    tr {
      td {
        background-color: #eeeeee;
        padding: 5px 5px 5px 20px;
      }
    }
  }
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  opacity: 0.6;
}

.arrow.asc {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #ffffff;
}

.arrow.desc {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #ffffff;
}
</style>
