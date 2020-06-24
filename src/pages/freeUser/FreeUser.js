import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'AdministratorsList',
  components: {
    ScreenBox,
    Tables,
    Paging
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue)
  },
  methods: {
    changeCheckType (checkType) { // 审核方式
      this.checkType = checkType
      Request.changeCheckType(this, this.checkType)
    },
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue)
    },
    changeStatusValue (locked) { // 更新用户状态列表筛选函数
      this.locked = locked
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue)
    },
    search (type, val) { // 筛选项类型和值函数
      this.searchType = type
      this.searchValue = val
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue)
    },
    onlocked (locked, userName) { // 管理员状态值改变函数
      Request.onlocked(this, locked, userName)
    },
    administratorsAdd () { // 新增管理员弹层函数
      this.drawer = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    lookFor (id) { // 查看
      Request.lookFor(this, id)
      this.dialogFormVisible = true
    },
    deleteUser (userName) { // 注销帐号
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        Request.deleteUser(this, userName)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      checkType: null, //审核方式
      disabled: true, // 表单为true则不可编辑
      tableData: [{ // 表格数据
        id: null,
        locked: null, // 用户锁定状态（默认：1正常, 0锁定, 2注销）
        loginTime: null, // 最后登录时间
        nickName: null, // 昵称
        phoneNum: null, // 手机号
        realName: null, // 真实姓名
        userName: null // 帐号
      }],
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      locked: null, // 筛选用户状态值
      searchType: null, // 搜索框类型值
      searchValue: null, // 搜索框的值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      ruleForm: { // 用户详情数据
      },
      questionList: [], // 问答列表
      rules: { // 表单验证.
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
        roleName: [{ required: true, message: '请输入帐号', trigger: 'blur' }] // 帐号验证
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      formEdit: {
        locked: null, // 状态
        userName: null, // 帐号
        realName: null, // 姓名
        phoneNum: null, // 手机号
        pass: null, // 密码
        checkPass: null, // 确认密码
        roleId: 40 // 角色id
      },
      ruless: { // 表单验证.
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
