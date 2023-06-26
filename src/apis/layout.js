// 封装一个接口函数
import httpInstance from "@/utils/http";

export function getCategoryAPI() {
    return httpInstance({
        url: '/home/category/head',
    })
}