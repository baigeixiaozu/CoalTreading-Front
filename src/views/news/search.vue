<template>
  <el-input
  placeholder="搜索更多"
  v-model="input"
  clearable>
 </el-input>
 
</template>

<script>
  import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>