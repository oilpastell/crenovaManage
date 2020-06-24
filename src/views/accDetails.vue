<template>
  <div class="productDetail">
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="id"
      label="产品详情id"
     >
    </el-table-column>
    <el-table-column
      prop="acessories_id"
      label="配件id"
     >
    </el-table-column>
    <el-table-column
      prop="account"
      label="账户">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="sellingPoint"
      label="卖点">
    </el-table-column>
    <el-table-column
      prop="sellingImgs"
      label="卖点图片">
    </el-table-column>
    <el-table-column
      prop="state"
      label="是否使用">
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