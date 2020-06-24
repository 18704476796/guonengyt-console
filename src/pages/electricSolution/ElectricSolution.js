import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
import EditorBar from '@/common/wangEnduit/WangEnduit.vue'

export default {
  name: 'ElectricSolution',
  components: {
    ScreenBox,
    Tables,
    Paging,
    EditorBar
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue)
  },
  methods: {
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
    search (type, val) {
      this.searchType = type
      this.searchValue = val
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue)
    },
    lookFor (id) { // 查看
      Request.lookFor(this, id)
      this.dialogDetail = true
    },
    onlocked (locked, id) { // 修改状态
      Request.onlocked(this, locked, id)
    },
    driverAdd () { // 新增管理员弹层函数
      this.drawer = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmit(this)
        } else {
          return false // 表单验证不通过
        }
      })
    },
    edit (item) { // 编辑管理员弹层函数
      this.formEdit.title = item.title
      this.formEdit.content = item.content
      this.formEdit.id = item.id
      this.formEdit.status = item.status
      this.formEdit.newsSort = item.newsSort
      this.dialogFormVisible = true
    },
    onSubmitEdit () { // 编辑解决问题
      this.$refs.formEdit.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmitEdit(this)
        } else {
          return false // 表单验证不通过
        }
      })
    },
    deleteUser (id) { // 删除解决方案
      Request.deleteUser(this, id)
    },
    changeCheckType (val, id) { // 修改审核状态
      Request.changeCheckType(this, val, id)
    }
  },
  data () {
    return {
      dialogDetail: false, // 查看详情抽屉
      isClear: false,
      disabled: true, // 表单为true则不可编辑
      tableData: [{ // 表格数据
      }],
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      locked: null, // 筛选用户状态值
      searchType: null, // 搜索框类型值
      searchValue: null, // 搜索框的值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        status: 0, // 启用禁用
        newsSort: null, // 序号
        title: '', // 标题
        content: '' // 内容
      },
      rules: { // 表单验证.
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }] // 帐号验证
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      formEdit: { // 修改解决方案数据
        id: null,
        status: null,
        newsSort: null, // 序号
        title: '', // 标题
        content: '' // 内容
      },
      sysUserApproval: {}, // 审核信息
      ruless: { // 表单验证.
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
