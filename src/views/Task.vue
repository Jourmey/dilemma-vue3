<template>
  <div>
    <a-table :columns="columns" :data-source="data" rowKey="id" :pagination="{'position': 'bottom', 'pageSize': 20}" @change="tableChange">
        <template #expandedRowRender="{ record }">
        <div class="content">
        <div class="desc">
            {{ record.description }}
        </div>
        <div class="btn">
            <a-button type="link" block @click="btnClick">任务</a-button>
        </div>
        </div>
        </template>
    </a-table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { getAllTask } from '../api'
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address'}
];

const data = [
  {
    id: 1,  
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    id: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    id: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

interface Pagination {
    postion: string;
    pageSize: number;
    current: number;
}

const btnClick = async () => {
    const res = await getAllTask('/breeds/image/random')
    console.log(res.data.code,res.data.message, res.data.data)
}

const tableChange = (pagination:Pagination) => {
    console.log(pagination.pageSize, pagination.current)
}

export default defineComponent({
  name: 'Task',
  setup() {
    return {
      data,
      columns,
      btnClick,
      tableChange
    };
  },
});
</script>
<style scoped>
.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.desc {
    margin-left: 5%;
}
.btn {
    margin-right: 15%;
}
</style>

