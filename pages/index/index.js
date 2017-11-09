Page({

  /**
   * 页面的初始数据
   */

  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    imgFunction: [
      {image: '../images/affrais.png',value: '办事'},
      { image: '../images/affrais.png', value: '办事' },
      {image: '../images/affrais.png',value: '办事'},
      {image: '../images/affrais.png',value: '办事'},
      {image: '../images/affrais.png',value: '办事'},
      { image: '../images/affrais.png', value: '办事' }
    ],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'test1',
        style: 'color: #333;font-weight: bold;padding-left: 10px;'
      },
      children: [{
        type:'text',
        text:'语音播放'
      }]
    }],
    indicatorDots: true,
    indicatorColor: '#fff',
    indicatorActiveColor: 'red',
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  takePhote() {
    const ctx1 = wx.createCameraContext()
    ctx1.takePhoto({
      quality: 'high',
      success: (res1) {
        this.setData({
          src: res1.tempImagePath
        })
      }
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
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
    this.videoCtx = wx.createVideoContext('myVideo'),
      this.audioCtx = wx.createAudioContext('myAudio')
  },

  play() {
    this.videoCtx.play()
  },

  pause() {
    this.videoCtx.pause()
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
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