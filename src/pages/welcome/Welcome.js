import Request from './Request.js' // 接口调用文件
export default {
  name: 'Welcome',
  mounted () { // 钩子函数
    Request.getWelcomeInfo(this)
  },
  data () {
    return {
      backUrl: 'http://47.96.80.142/test-img/backwelcome.jpg',
      boxHeight: this.$store.state.mainHeight - 76, // 76为main顶部及填充值
      logoImg: 'http://47.96.80.142/test-img/logoPng.png',
      boxBorder: 'http://47.96.80.142/test-img/border1.png',
      department: '', // 部门
      job: '', // 职务
      nickName: '', // 昵称
      realName: '', // 姓名
      userName: '', // 帐号
      currentLoginTime: '' // 当前登录时间
    }
  }
}
