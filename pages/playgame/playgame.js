
    

Page({
  goPage2() {//跳转至ending游戏主界面
    wx.navigateTo({
      url: '/pages/ending/ending'
    })
    
  },
  goPage3() {//跳转至ending游戏主界面
    wx.navigateTo({
      url: '/pages/ending_2/ending_2'
    })},
  /**
   * 页面的初始数据
   */
  data: {
    //所有的扑克牌种类
     stdCardId :
    ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','sJ','sQ','sK',
     'h1','h2','h3','h4','h5','h6','h7','h8','h9','h10','hJ','hQ','hK',
    'c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','cJ','cQ','cK',
    'd1','d2','d3','d4','d5','d6','d7','d8','d9','d10','dJ','dQ','dK'],//花色,分别为黑桃，红心，梅花，方块
    //a、b拥有的手牌
    stdCardId_a:
    [
    ],
    stdCardId_b:
    [
    ],
    random_array:
    [
    ],
    random: 0,
    fangzhiquFlag: false,
    sum:52,//纸牌总数
    order:0,//判断轮到哪个玩家放牌
    number:0,//放置区的卡牌数量
    count_a:0,count_b:0,//玩家a、b拥有的手牌数量
    colour:-1,//花色,0为黑桃，1为红心，2为梅花，3为方块
    flag:true,//判断翻开的牌花色是否与上一张一样
    flag_a2:false,//玩家A收走手牌后出现扑克背面
    flag_b2:false//玩家B收走手牌后出现扑克背面
  },
  //判断用户是否点击卡组
  handleTap(){
    this.setData({
      sum:this.data.sum-1,
      fangzhiquFlag: true,
      order:this.data.order+1,//轮到A玩家时order值为偶数，轮到B玩家时order值为奇数
      flag:false, 
      // 生成随机数
      random: Math.floor(Math.random()*52),
      ['random_array['+ this.data.number + ']']:this.data.random,
    })
    if((this.data.colour==Math.floor(this.data.random/13))&&this.data.number!=0)//若翻开的花色与上一张牌相同
    {
      if(this.data.order%2==0){//如果此时轮到A
        this.setData({
          flag:true,
          colour:Math.floor(this.data.random/13),
          flag_a:true,
          flag_a2:true,
          count_a:this.data.number+this.data.count_a+1,
          fangzhiquFlag: false,
          number:0})
      }//A玩家收走放置区所有牌
      else {//如果此时轮到B
        this.setData({
          flag:true,
          colour:Math.floor(this.data.random/13),
          flag_b:true,
          flag_b2:true,
          count_b:this.data.number+this.data.count_b+1,
          fangzhiquFlag: false,
          number:0})
      }
    }
    else {this.setData({//若翻开的花色与上一张牌不相同
      colour:Math.floor(this.data.random/13),number:this.data.number+1,})}
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})