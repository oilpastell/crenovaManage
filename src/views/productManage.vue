<template>
  <div class="productManage">
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="id"
      label="产品id"
      width="100">
    </el-table-column>
    <el-table-column
      prop="image"
      label="图片"
     >
    </el-table-column>
    <el-table-column
      prop="account"
      label="账户">
    </el-table-column>
    <el-table-column
      prop="category"
      label="产品类别">
    </el-table-column>
    <el-table-column
      prop="name"
      label="产品名">
    </el-table-column>
    <el-table-column
      prop="links"
      label="产品链接">
    </el-table-column>
    <el-table-column
      prop="model"
      label="型号">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="weight"
      label="重量">
    </el-table-column>
    <el-table-column
      prop="list"
      label="包装列表">
    </el-table-column>
    <el-table-column
      prop="materials"
      label="材料">
    </el-table-column>
    <el-table-column
      prop="highlights"
      label="标识图片">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="detailedDescription"
      label="详细描述">
    </el-table-column>
    <el-table-column
      prop="video"
      label="视频">
    </el-table-column>
    <el-table-column
      prop="state"
      label="是否上架">
    </el-table-column>
    <el-table-column
      prop="exhibition"
      label="是否上官网主页">
    </el-table-column>
    <el-table-column
      prop="hotSale"
      label="是否上热卖">
    </el-table-column>
    <el-table-column
      prop="newProduct"
      label="是否新品">
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