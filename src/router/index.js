// 引入路由
import { createWebHashHistory,createRouter } from 'vue-router'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'


// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home,
                },
                {
                    path: '/category',
                    name: 'Category',
                    component: Category,
                }
            ]
        },
        {
            path: '/login',
            name: 'Layout',
            component: Login,
        }
    ]
})

export default router
