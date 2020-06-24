import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    // 重定向，用来指向一打开网页就跳转到哪个路由
    path: '/',
    redirect: '/main'
  },
  {
    // 首页
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children:[// 开始嵌套路由，这下面的所有路由都是Main路由的子路由
      {
        path:'/', // 嵌套路由里默认是哪个网页
        redirect: '/index'
      },
      {
        path:'/index', // 首页的路由
        name:'Index',
        component:() => import('../views/Index.vue')
      },
      {
        path:'/accDetails', // 配件详情页的路由
        name:'accDetails',
        component:() => import('../views/accDetails.vue')
      },
      {
        path:'/accImage', // 配件图片页的路由
        name:'accImage',
        component:() => import('../views/accImage.vue')
      },
      {
        path:'/accManage', // 配件管理页的路由
        name:'accManage',
        component:() => import('../views/accManage.vue')
      },
      {
        path:'/advert', // 广告促销页的路由
        name:'advert',
        component:() => import('../views/advert.vue')
      },
      {
        path:'/comments', // 评论页的路由
        name:'comments',
        component:() => import('../views/comments.vue')
      },
      {
        path:'/contactUS', // 联系我们的路由
        name:'contactUS',
        component:() => import('../views/contactUS.vue')
      },
      {
        path:'/crenovamoments', // 帖子页的路由
        name:'crenovamoments',
        component:() => import('../views/crenovamoments.vue')
      },
      {
        path:'/diary', // 日记页的路由
        name:'diary',
        component:() => import('../views/diary.vue')
      },
      {
        path:'/FAQ', // FAQ页的路由
        name:'FAQ',
        component:() => import('../views/FAQ.vue')
      },
      {
        path:'/like', // 点赞页的路由
        name:'like',
        component:() => import('../views/like.vue')
      },
      {
        path:'/ourTester', // 我们的测评的路由
        name:'ourTester',
        component:() => import('../views/ourTester.vue')
      },
      {
        path:'/productDetail', // 产品详情页的路由
        name:'productDetail',
        component:() => import('../views/productDetail.vue')
      },
      {
        path:'/productImage', // 产品图片页的路由
        name:'productImage',
        component:() => import('../views/productImage.vue')
      },
      {
        path:'/productManage', // 产品管理页的路由
        name:'productManage',
        component:() => import('../views/productManage.vue')
      },
      {
        path:'/subscribe', // 订阅的路由
        name:'subscribe',
        component:() => import('../views/subscribe.vue')
      },
      {
        path:'/user', // 用户模块的路由
        name:'user',
        component:() => import('../views/user.vue')
      },
      {
        path:'/userManual', // 用户手册的路由
        name:'userManual',
        component:() => import('../views/userManual.vue')
      },
    ]
  },
  {
    path:'/*', // 注意，这里不是嵌套理由了，这是为了设置404页面，一定要放在最后面，这样当服务器找不到页面的时候就会返回404
    name:'404',
    component: () => import('../views/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
