module.exports =  {
  // 首页 logo 展示数据
  github: 'https://github.com/frankFree',
  email: '1903288060@qq.com',
  qq: '1903288060',
  // 输入框默认值
  title: 'curryIs | Blog',
  // 是否其他作者发布的文章是否展示, 更具 user.name 做对比
  author: true,
  // 背景图数组，随机展示
  bg_img: [
    require('./src/assets/index_bg.jpg'),
    require('./src/assets/index_bg2.jpg'),
    require('./src/assets/index_bg3.jpg'),
    require('./src/assets/index_bg4.jpg'),
    require('./src/assets/index_bg5.jpg'),
    require('./src/assets/index_bg6.jpg'),
    require('./src/assets/index_bg6.jpg')
  ],
  // 登陆 github 相关信息
  user: {
    name: "frankFree",
    repo: "blog",
    client_id: 'ae2234ba9f91af06075c',
    client_secret: 'a381c89b4cf1237f97e126557cc646b09082a2f4'
  },
}