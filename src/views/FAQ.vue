
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
      label="FAQ表id"
     >
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="用户"
     >
    </el-table-column>
    <el-table-column
      prop="e_mail"
      label="电子邮箱">
    </el-table-column>

    <el-table-column
      prop="phone_number"
      label="手机号">
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
      prop="detailedDescription"
      label="问题描述">
    </el-table-column>
    <el-table-column
      prop="answer"
      label="答案">
    </el-table-column>
    <el-table-column
      prop="exhibition"
      label="是否上官网主页">
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