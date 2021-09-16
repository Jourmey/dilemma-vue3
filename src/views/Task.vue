<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="data"
      rowKey="id"
      :pagination="{ position: 'bottom', pageSize: 20 }"
      @change="onShowSizeChange"
    >
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
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { getTask } from "../api/task";
import { GetReq } from "../api/task";

const columns = [
  {
    dataIndex: "Id",
    key: "id",
    slots: { title: "customTitle", customRender: "id" },
  },
  {
    title: "Url",
    dataIndex: "url",
    key: "url",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    slots: { customRender: "status" },
  },
  {
    title: "Site",
    key: "site",
    slots: { customRender: "site" },
  },
];

var data = ref([
  {
    id: 1,
    url: "https://www.bilibili.com/video/BV1cP4y147Hj",
    signatures: "",
    tag: [0, 2, 3],
    status: 2,
    title: "比比东把小舞变成了兔子，你们能帮帮她吗？",
    site: "Bilibili",
    create_time: "2021-09-15T03:44:29Z",
    update_time: "2021-09-15T03:44:38Z",
  },
]);

interface Pagination {
  postion: string;
  pageSize: number;
  current: number;
}

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

// 翻页
const onShowSizeChange = async (current: number, pageSize: number) => {
  let req: GetReq = {
    id: 0,
    page_size: 100,
    page_no: 0,
  };
  const res = await getTask("/task", req);
  const data = res.data.result;
};

export default defineComponent({
  name: "task",
  setup() {
    const current = ref<number>(1);
    const pageSize = ref(20);
    return {
      data,
      columns,
      current,
      pageSize,
      // btnClick,
      onShowSizeChange,
    };
  },
});
</script>
