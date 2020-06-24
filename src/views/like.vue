
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
      label="点赞ID"
     >
    </el-table-column>
    <el-table-column
      prop="post_id"
      label="帖子ID">
    </el-table-column>

    <el-table-column
      prop="e_mail"
      label="电子邮箱">
    </el-table-column>
    
    <el-table-column
      prop="buyer_id"
      label="购买用户ID">
    </el-table-column>
    <el-table-column
      prop="like_time"
      label="点赞时间">
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