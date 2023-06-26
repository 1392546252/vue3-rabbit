import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理

    // state 导航数据列表
    const categoryList = ref([])

    // actions 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        console.log(res);
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }   
})