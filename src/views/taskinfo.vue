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
        <template #operation="{ record }">
          <a @click="a_buton_down(record.id)">Down</a>
        </template>
      </a-table>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { getTaskinfo, TaskInfoGetReq, TaskInfo } from "../api/api";
import { postViedoDownload, VideoDownloadReq } from "../api/api";

const columns = [
  { title: "ID", dataIndex: "id" },
  { title: "TASKID", dataIndex: "task_id" },
  { title: "CONTAINER", dataIndex: "container" },
  { title: "QUALITY", dataIndex: "quality" },
  { title: "SIZE", dataIndex: "size2" },
  { title: "STATUS", dataIndex: "status" },
  {
    title: "ACTION",
    key: "operation",
    fixed: "right",
    width: 100,
    slots: { customRender: "operation" },
  },
];

const data = ref<TaskInfo[]>();
const input_taskid = ref<string>("");

const buton_search = async () => {
  let idn = 0;
  if (input_taskid.value != "") {
    idn = parseInt(input_taskid.value);
  }
  let req: TaskInfoGetReq = {
    id: 0,
    task_id: idn,
    page_size: 100,
    page_no: 0,
  };
  const res = await getTaskinfo(req);

  for (let i = 0; i < res.data.result.length; i++) {
    // 转换大小
    res.data.result[i].size2 = FileSize(res.data.result[i].size);
  }

  data.value = res.data.result;
};

const a_buton_down = async (taskinfoid: number) => {
  let req: VideoDownloadReq = {
    task_info_id: [taskinfoid],
  };
  const res = await postViedoDownload(req);
};

function FileSize(size: number) {
  if (size == 0) {
    return "0 Bytes";
  }
  let sizename = [
    " Bytes",
    " KB",
    " MB",
    " GB",
    " TB",
    " PB",
    " EB",
    " ZB",
    " YB",
  ];
  let i = Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toPrecision(3) + sizename[i];
}

export default defineComponent({
  name: "taskinfo",
  setup() {
    return {
      data,
      columns,
      // current,
      // pageSize,
      input_taskid,
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
  