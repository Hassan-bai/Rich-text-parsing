//index.js
//引入html文件
const htmls = require('./htmls.js');
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
    //富文本内容赋值给组件
    this.setData({
      html: htmls['demo4']
    })
  }
})
