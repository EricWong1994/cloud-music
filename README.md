# react hooks+redux+immutable.js仿网易云音乐打造精美webApp

移动端和PC端的chrome浏览器食用更佳 : )

打开方式:

1. 将项目 clone 下来

```shell
$ git clone https://github.com/sanyuan0704/cloud-music.git
$ cd cloud-music
$ npm install

// 下载子模块
$ git submodule update --init --recursive
$ cd NeteaseCloudMusicApi
$ npm install 
$ cd ../  (注意: 一定要返回到上一层)
```

接下来，要记得把`src/api/config.js`中把`baseUrl`改成接口的地址。（一定要记得,不然报404!）

1. 运行

```shell
$ npm run start
```

现在就在本地的3000端口访问了。如果要打包到线上，执行`npm run build`即可。

项目介绍:

说明:本项目参考网易云音乐安卓端app界面开发，基础UI绝大多数自己来构建，算是对自己的一个挑战，在这个过程也学到了不少设计经验。
