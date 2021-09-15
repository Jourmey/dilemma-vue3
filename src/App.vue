<template>
  <div class="my-container">
    <div class="left">
      <a-button type="link" size="large">
        <template #icon><UnorderedListOutlined /></template>
        任务
      </a-button>
    </div>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { UnorderedListOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent ({
  components: {
    UnorderedListOutlined,
  },
})
</script>
<style lang="scss">
.my-container {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.left {
  width: 15%;
  background: #2c3e50;
}
.right {
  width: 85%;
  margin-right: 10px;
}
</style>
