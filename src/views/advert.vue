
<template>
  <div class="like">
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="id"
      label="活动ID"
     >
    </el-table-column>
    <el-table-column
      prop="add_file"
      label="视频图片">
    </el-table-column>

    <el-table-column
      prop="e_mail"
      label="电子邮箱">
    </el-table-column>
    <el-table-column
      prop="state"
      label="是否已处理">
    </el-table-column>
    <el-table-column
      prop="notes"
      label="备注">
    </el-table-column>
  </el-table>
</template>
  </div>
</template>

<script>
export default {
data() {
  return {
     tableData: [{
          id: '0001',
          image: '哈哈哈哈哈',
          account: '小喜爱'
        },
        {
           id: '0001',
          image: '哈哈哈哈哈',
          account: '小喜爱'
        },
        {
           id: '0001',
          image: '哈哈哈哈哈',
          account: '小喜爱'
        },
        {
           id: '0001',
          image: '哈哈哈哈哈',
          account: '小喜爱'
        }
        ]
  }
},
}
</script>

<style>

</style>