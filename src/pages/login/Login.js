import Request from './Request' // 接口调用文件
export default {
  name: 'Login',
  mounted () { // 钩子函数
    Request.loginImg(this) // login初始化调用接口
  },
  data () {
    return {
      loginForm: { // 表单数据
        user: '', // 输入的帐号
        password: '' // 输入的密码
      },
      rules: { // 表单验证.
        user: { required: true, message: '请输入登入帐号', trigger: 'blur' }, // 帐号验证
        password: { required: true, message: '请输入登入口令', trigger: 'blur' } // 密码验证
      },
      loginLogo: '', // login Logo
      loginBack: '', // login背景图片地址
      api: '/api/'
    }
  },
  methods: {
    submitForm (formName) { // 点击登入按钮执行函数
      Request.login(this, formName) // 调用登录接口
    }
  }
}
