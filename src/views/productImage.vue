<template>
  <div class="productImage">
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="id"
      label="产品图片id"
     >
    </el-table-column>
    <el-table-column
      prop="product_id"
      label="产品id"
     >
    </el-table-column>
    <el-table-column
      prop="color"
      label="颜色">
    </el-table-column>
    <el-table-column
      prop="dimensions"
      label="参数页产品图片">
    </el-table-column>
    <el-table-column
      prop="account"
      label="账户">
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