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
        <!-- <template #operation="{ record }">
          <a @click="a_buton_down(record.id)">Down</a>
        </template> -->
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
  { title: "PATH", dataIndex: "path" },
  { title: "TITLE", dataIndex: "title" },
  { title: "CREATE_TIME", dataIndex: "create_time" },
  { title: "UPDATE_TIME", dataIndex: "update_time" },
  // {
  //   title: "ACTION",
  //   key: "operation",
  //   fixed: "right",
  //   width: 100,
  //   slots: { customRender: "operation" },
  // },
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

const a_buton_down = async (taskinfoid: number) => {
  // let req: VideoDownloadReq = {
  //   task_info_id: [taskinfoid],
  // };
  // const res = await postViedoDownload(req);
};

export default defineComponent({
  name: "video",
  setup() {
    return {
      data,
      columns,
      // current,
      // pageSize,
      input_taskinfoid,
      // btnClick,
      buton_search,
      a_buton_down,
      // onShowSizeChange,
    };
  },
  components: {
    SearchOutlined,
  },
});
</script>
  