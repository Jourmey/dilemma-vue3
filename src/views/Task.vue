<template>
  <a-row type="flex">
    <a-col>
      <a-input flex="100px" v-model:value="input_taskid" placeholder="TASKID" />
    </a-col>
    <a-col>
      <a-button type="primary" @click="buton_search">
        <template #icon><SearchOutlined /></template>
        Search
      </a-button>
    </a-col>
  </a-row>
  <a-row>
    <a-col flex="auto">
      <a-table :columns="columns" :data-source="data" rowKey="id">
        <!-- <template #expandedRowRender="{ record }">
        <div class="content">
          <div class="desc">
            {{ record.description }}
          </div>
          <div class="btn">
            <a-button type="link" block @click="btnClick">任务</a-button>
          </div>
        </div>
      </template> -->
      </a-table>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { getTask, GetReq, Task } from "../api/api";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  { title: "URL", dataIndex: "url" },
  { title: "TITLE", dataIndex: "title" },
  {
    title: "STATUS",
    dataIndex: "status",
  },
  { title: "SITE", dataIndex: "site" },
];

const data = ref<Task[]>();
const input_taskid = ref<string>("");

// const pagination_Pagination = ref<Pagination>({ position: 'bottom', pageSize: 20, current: 1});

// interface Pagination {
//   postion: string;
//   pageSize: number;
//   current: number;
// }

const buton_search = async () => {
  let idn = 0;
  if (input_taskid.value != "") {
    idn = parseInt(input_taskid.value);
  }
  let req: GetReq = {
    id: idn,
    page_size: 100,
    page_no: 0,
  };
  const res = await getTask(req);
  data.value = res.data.result;
};

// const btnClick = async () => {
//   let req: GetReq = {
//     id: 0,
//     page_size: 100,
//     page_no: 0,
//   };
//   const res = await getTask("/task", req);
//   console.log("任务", res);
//   data.value = res.data.result;
// };

// // 翻页
// const onShowSizeChange = async (current: number, pageSize: number) => {
//   let req: GetReq = {
//     id: 0,
//     page_size: 100,
//     page_no: 0,
//   };
//   const res = await getTask(req);
//   const data = res.data.result;
// };

export default defineComponent({
  name: "task",
  setup() {
    return {
      data,
      columns,
      // current,
      // pageSize,
      input_taskid,
      // btnClick,
      buton_search,
      // onShowSizeChange,
    };
  },
  components: {
    SearchOutlined,
  },
});
</script>
