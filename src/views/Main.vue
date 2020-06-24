<template>
  <el-container>
    <!--顶部-->
    <el-header style="border-bottom: 1px solid gray;">
      <el-row style="margin: 10px 15px">
        <el-col :span="1">
          <!--收缩条-->
          <a href="#" @click="changeCollapse" style="font-size: 25px;color:#909399;">
            <i :class="collpaseIcon"></i>
          </a>
        </el-col>
        <div class="title">crenova 后台管理系统</div>
      </el-row>
    </el-header>
    <!--中央区域-->
    <el-main>
      <el-container>
        <!--左侧导航栏-->
        <el-aside :style="{width:collpaseWidth}">
          <!--default-active代表导航栏默认选中哪个index, :collapse决定导航栏是否展开，为boolean类型
          :router决定导航栏是否开启路由模式，即在菜单item上设置路由是否生效，值为boolean类型-->
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :router="true"
          >
            <!--index设置当前item的下标，:route则是传一个对象进行，指定路由-->
            <el-menu-item index="index">
              <i class="fa fa-magic"></i>
              <span slot="title">首页</span>
            </el-menu-item>


              <el-menu-item index="productManage" >
                <i class="el-icon-menu"></i> 产品管理表
              </el-menu-item>
              <el-menu-item index="productImage">
                <i class="el-icon-menu"></i> 产品图片管理表
              </el-menu-item>
              <el-menu-item index="productDetail">
                <i class="el-icon-menu"></i> 产品详情页
              </el-menu-item>

              <el-menu-item index="accManage">
                <i class="el-icon-menu"></i>
                配件管理表
              </el-menu-item>
              <el-menu-item index="accImage">
                <i class="el-icon-menu"></i> 配件图片管理表
              </el-menu-item>
              <el-menu-item index="accDetails">
                <i class="el-icon-menu"></i> 配件详情页
              </el-menu-item>
            <el-menu-item index="FAQ">
              <i class="el-icon-menu"></i>
              <span slot="title">FAQ</span>
            </el-menu-item>
            <el-menu-item index="contactUS">
              <i class="el-icon-menu"></i>
              <span slot="title">联系我们管理表</span>
            </el-menu-item>
            <el-menu-item index="userManual">
              <i class="el-icon-menu"></i>
              <span slot="title">用户手册</span>
            </el-menu-item>
            <el-menu-item index="crenovamoments">
              <i class="el-icon-menu"></i>
              <span slot="title">帖子</span>
            </el-menu-item>
            <el-menu-item index="like">
              <i class="el-icon-menu"></i>
              <span slot="title">点赞记录表</span>
            </el-menu-item>
            <el-menu-item index="comments">
              <i class="el-icon-menu"></i>
              <span slot="title">评论页</span>
            </el-menu-item>
            <el-menu-item index="advert">
              <i class="el-icon-menu"></i>
              <span slot="title">广告、促销</span>
            </el-menu-item>
            <el-menu-item index="ourTester">
              <i class="el-icon-menu"></i>
              <span slot="title">我的的测评</span>
            </el-menu-item>
            <el-menu-item index="userManual">
              <i class="el-icon-menu"></i>
              <span slot="title">用户模块</span>
            </el-menu-item>
            <el-menu-item index="subscribe">
              <i class="el-icon-menu"></i>
              <span slot="title">订阅</span>
            </el-menu-item>
            <el-menu-item index="diary">
              <i class="el-icon-menu"></i>
              <span slot="title">日记</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!--主内容显示区域-->
        <el-main>
          <!--路由渲染-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
    <!--底部-->
    <el-footer style="border-top: 1px solid gray"></el-footer>
  </el-container>
</template>

<script>
// 这一大段JS就是为了做收缩/展开导航栏而用的！
export default {
  name: "Main",
  data: function() {
    return {
      isCollapse: false // 决定左侧导航栏是否展开
    };
  },
  computed: {
    collpaseIcon: function() {
      // 左侧导航栏是否展开状态的图标
      // 如果是展开状态就图标向右，否则图标向左
      return this.isCollapse ? "el-icon-s-fold" : "el-icon-s-unfold";
    },
    collpaseWidth: function() {
      // 左侧导航栏是否展开状态的宽度
      // 如果是展开状态就导航栏宽度为65px，否则200px
      return this.isCollapse ? "65px" : "200px";
    }
  },
  methods: {
    changeCollapse: function() {
      // 更改左侧导航栏展示状态
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped>
/*整体显示区域布局样式*/
.el-container {
  height: 100%;
}

.el-header,
.el-main {
  padding: 0;
}

/*左边导航栏具体样式*/
.el-menu-vertical-demo.el-menu {
  padding-left: 20px;
  text-align: left;
  height: 100%;
  padding: 0;
}

el-container > .el-menu-vertical-demo.el-menu {
  padding: 0;
}

.el-submenu .el-menu-item,
.el-menu-item {
  min-width: 50px;
}

.el-menu-item {
  padding: 0;
}
.title{
  font-size: 30px;
  color: #888;
}
</style>