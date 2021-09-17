<template>
  <a-row type="flex">
    <a-col>
      <a-input
        flex="100px"
        v-model:value="input_taskinfoid"
        placeholder="VIDEOID"
      />
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
        <template #operation="{ record }">
          <a :href="record.path" target="_blank"> {{ record.path }}</a>
        </template>
      </a-table>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { BaseUrl } from "../api/api";
import { getViedo, GetReq, Video } from "../api/api";

const columns = [
  { title: "ID", dataIndex: "id" },
  { title: "TASKINFOID", dataIndex: "task_info_id" },
  // { title: "PATH", dataIndex: "path" },
  {
    title: "PATH",
    dataIndex: "path",
    key: "operation",
    slots: { customRender: "operation" },
  },
  { title: "TITLE", dataIndex: "title" },
  { title: "CREATE_TIME", dataIndex: "create_time" },
  { title: "UPDATE_TIME", dataIndex: "update_time" },
];

const data = ref<Video[]>();
const input_taskinfoid = ref<string>("");

const buton_search = async () => {
  let idn = 0;
  if (input_taskinfoid.value != "") {
    idn = parseInt(input_taskinfoid.value);
  }
  let req: GetReq = {
    id: idn,
    page_size: 100,
    page_no: 0,
  };
  const res = await getViedo(req);
  let videos = res.data.result;

  // 替换路径
  for (let i = 0; i < videos.length; i++) {
    videos[i].path = videos[i].path.replaceAll("0.0.0.0", BaseUrl);
  }
  data.value = videos;
};

// const model_visible = ref<boolean>(false);
// const model_handleOk = (e: MouseEvent) => {
//   model_visible.value = false;
// };
// const model_showModal = async () => {
//   const res = await get("http://localhost:9090/Bilibili/1/");
//   model_html.value = res.data;

//   model_visible.value = true;
// };
// const model_html = ref<string>("");

export default defineComponent({
  name: "video",
  setup() {
    return {
      data,
      columns,
      input_taskinfoid,
      buton_search,
      // // 模态框
      // model_visible,
      // model_handleOk,
      // model_showModal,
      // model_html,
    };
  },
  components: {
    SearchOutlined,
  },
});
</script>
  