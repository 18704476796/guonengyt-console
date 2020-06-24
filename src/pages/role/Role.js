import ScreenBox from './components/ScreenBox'
import Request from './Request' // 接口文件
export default {
  name: 'Role',
  components: {
    ScreenBox
  },
  data () {
    return {
      disabled: true,
      formData: [{
        // id: '101', // 角色Id
        // roleName: '学员用户', // 角色名称
        // description: '平台内部注册的官方学员用户角色' // 角色描述
      }],
      drawer: false, // 控制新增导航抽屉弹层是否展开
      formBox: [],
      form: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        roleName: '', // 名称
        description: '', // 指向地址
        forShort: null,
        id: '0' // 导航Id
      },
      rules: { // 表单验证.
        roleName: { required: true, message: '请输入角色名称', trigger: 'blur' } // 帐号验证
      }
    }
  },
  mounted () { // 钩子函数
    Request.getInfo(this, null, null)
  },
  methods: {
    onSubmit () {
      this.$refs.forms.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmit(this)
        } else {
          return false // 表单验证不通过
        }
      })
    },
    search (type, val) { // 搜索框检索函数
      Request.getInfo(this, type, val)
    },
    edit (vals) { // 编辑函数-子组件传递数据修改父组件的数据
      this.disabled = vals
    },
    preservation () { // 保存
      Request.preservation(this)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    newlyAdd () { // 新增导航函数
      this.drawer = true
    },
    onDelete (Id) { // 删除函数
      Request.onDelete(this, Id)
    }
  }
}
