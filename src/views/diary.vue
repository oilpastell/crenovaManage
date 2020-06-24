
<template>
  <div class="like">
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="活动日记ID"></el-table-column>
        <el-table-column prop="user_ip" label="用户IP"></el-table-column>
        <el-table-column prop="create_date" label="创建日期"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "0001",
          image: "哈哈哈哈哈",
          account: "小喜爱"
        },
        {
          id: "0001",
          image: "哈哈哈哈哈",
          account: "小喜爱"
        },
        {
          id: "0001",
          image: "哈哈哈哈哈",
          account: "小喜爱"
        },
        {
          id: "0001",
          image: "哈哈哈哈哈",
          account: "小喜爱"
        }
      ]
    };
  }
};
</script>

<style>
</style>