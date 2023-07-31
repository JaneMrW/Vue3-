/*
 * @Author: your name
 * @Date: 2023-07-15 16:44:55
 * @LastEditTime: 2023-07-31 07:42:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogSystem\mock\login.js
 */
import Mock from "mockjs";
const login = Mock.mock('/admin/login','post',(params) => {
    return {
        code:200,
        message:'成功',
        data:{
            token:'78782378237827238375'
        }
    }
})
const goodsList = Mock.mock('/admin/getGoodList','get',() => {
    return {
        code:200,
        message:'成功',
        records:[
            {cardName:'公牛红',Image:'../src/assets/公牛红.jpg'}
        ]
    }
})


export {login,goodsList}