
<template>
  <div class="accManage">
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="id"
      label="联系我们表ID"
      width="150"
     >
    </el-table-column>
    <el-table-column
      prop="e_mail"
      label="电子邮箱">
    </el-table-column>

    <el-table-column
      prop="type"
      label="类型">
    </el-table-column>
    
    <el-table-column
      prop="store_name"
      label="店铺名称">
    </el-table-column>
    <el-table-column
      prop="country"
      label="国家">
    </el-table-column>
     <el-table-column
      prop="order_id"
      label="订单编号">
    </el-table-column>
    <el-table-column
      prop="issue"
      label="问题">
    </el-table-column>
    <el-table-column
      prop="submit_time"
      label="提交时间">
    </el-table-column>
    <el-table-column
      prop="reply"
      label="回复信息">
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