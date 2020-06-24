<template>
  <div class="crenovamoments">
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="id"
      label="帖子id"
     >
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
     >
    </el-table-column>
    <el-table-column
      prop="picture"
      label="用户头像"
     >
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="用户名"
     >
    </el-table-column>
    <el-table-column
      prop="e_mail"
      label="电子邮箱"
     >
    </el-table-column>
    <el-table-column
      prop="release_time"
      label="发布时间"
     >
    </el-table-column>
    <el-table-column
      prop="post_content"
      label="发布内容"
     >
    </el-table-column>
    <el-table-column
      prop="page_views"
      label="浏览量"
     >
    </el-table-column>
    <el-table-column
      prop="thumbup"
      label="点赞"
     >
    </el-table-column>
    <el-table-column
      prop="theme"
      label="主题"
     >
    </el-table-column>
    <el-table-column
      prop="image"
      label="页面展示图片"
     >
    </el-table-column>
    <el-table-column
      prop="hot"
      label="是否在右边热门进行展示">
    </el-table-column>
    <el-table-column
      prop="exibition"
      label="是否在活动页面展示">
    </el-table-column>
    <el-table-column
      prop="state"
      label="是否在帖子页面左边中展示">
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