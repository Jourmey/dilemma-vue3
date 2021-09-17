<template>
  <a-row type="flex">
    <a-col>
      <a-input flex="100px" v-model:value="input_taskid" placeholder="TASKID" />
    </a-col>
    <!-- 搜索 -->
    <a-col>
      <a-button type="primary" @click="buton_search">
        <template #icon><SearchOutlined /></template>
        Search
      </a-button>
    </a-col>
    <!-- 新增 -->
    <a-col>
      <!-- 新增的模态框 -->
      <a-button type="primary" @click="showAddTaskModal"> ADD TASK </a-button>
      <a-modal
        title="创建任务"
        v-model:visible="modal_visible"
        :confirm-loading="modal_confirmLoading"
        @ok="modal_handleOk"
      >
        <a-input
          flex="100px"
          v-model:value="input_url"
          placeholder="https://www.bilibili.com/video/BV1cP4y147Hj"
        />
      </a-modal>
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
import { postTaskCreat, TaskCreatReq, Response } from "../api/api";

// 列表
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

// 列表
const data = ref<Task[]>();
const input_taskid = ref<string>("");
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

// 模态框
const modal_visible = ref<boolean>(false);
const modal_confirmLoading = ref<boolean>(false);
const showAddTaskModal = () => {
  modal_visible.value = true;
};

const input_url = ref<string>("");

// 模态框创建任务
const modal_handleOk = async () => {
  modal_confirmLoading.value = true;

  let req: TaskCreatReq = {
    url: input_url.value,
    tag: [0],
  };
  postTaskCreat(req).then(() => {
    modal_visible.value = false;
    modal_confirmLoading.value = false;
  });
};

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
      showAddTaskModal,
      modal_visible,
      modal_confirmLoading,
      modal_handleOk,

      input_url,
    };
  },
  components: {
    SearchOutlined,
  },
});
</script>
