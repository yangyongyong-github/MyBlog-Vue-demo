import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:"https://10.idqqimg.com/eth/ajNVdqHZLLDqYf0PtFibF9JNOnRbAw7DicWPicmfRkQwPeK2mnZ7ZJzZFdsCwCWdcwhEqoVphXiaDHE/130?tp=webp",
    siteTitle: "我的个人空间",
    github: "GitHub",
    qq: "2972239456",
    qqQrCode:"",
    weixin: "wechat",
    weixinQrCode:"",
    mail: "yongyong@163.com",
    icp: "京ICP备000000001号",
    githubName: "GitHubName",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
