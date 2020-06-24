import Request from './Request.js' // 接口文件
export default {
  name: 'ServiceProcess',
  components: {
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
    onlocked (locked, id) { // 修改状态
      Request.onlocked(this, locked, id)
    },
    driverAdd () { // 新增管理员弹层函数
      if (this.tableData.length === 0) {
        this.dialogFormVisible = true
      } else {
        alert('已存在服务流程,请您编辑')
      }
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () {
      Request.onSubmit(this)
    },
    edit (item) { // 编辑管理员弹层函数
      this.formEdit.content = item.content
      this.formEdit.id = item.id
      this.dialogFormVisible = true
    },
    onSubmitEdit () { // 编辑公司简介
      Request.onSubmitEdit(this)
    },
    deleteUser (id) { // 删除解决方案
      Request.deleteUser(this, id)
    },
    changeCheckType (val, id) { // 修改审核状态
      Request.changeCheckType(this, val, id)
    },
    img_path_file (file, fileList) {
      // 二维码上传组件 on-change 事件
      this.img_path = fileList
      console.log(fileList)
    },
    clearUploadedImage (type) {
      this.$refs.upload1.clearFiles()
      this.img_path = []
      console.log(type)
    }
  },
  data () {
    return {
      api: '/api/',
      upload_url: '/api/news/saveOrUpNewsData.htm', // 上传地址,
      upload1: '',
      img_path: [], // 上传二维码列表
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
        id: 0,
        status: null,
        newsSort: null, // 序号
        title: '', // 标题
        content: '', // 内容
        pictureUrlPath: '' // 上传图片列表
      },
      sysUserApproval: {}, // 审核信息
      ruless: { // 表单验证.
        // title: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ]
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
