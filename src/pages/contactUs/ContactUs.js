import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'NewsTrends',
  components: {
    ScreenBox,
    Tables,
    Paging
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
        alert('已存在信息,请您编辑')
      }
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    edit (item) { // 编辑管理员弹层函数
      this.formEdit.tel = item.tel
      this.formEdit.webId = item.webId
      this.formEdit.id = item.id
      this.formEdit.icpNumb = item.icpNumb
      this.formEdit.publicNetworkSecurity = item.publicNetworkSecurity
      this.formEdit.name = item.name
      this.formEdit.recordNumber = item.recordNumber
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
    },
    img_path_file (file, fileList) {
      // 二维码上传组件 on-change 事件
      this.img_path = fileList
      console.log(fileList)
    },
    back_path_file (file, fileList) {
      // 二维码上传组件 on-change 事件
      this.back_path = fileList
      console.log(fileList)
    },
    clearUploadedImage (type) {
      if (type === 'upload1') {
        this.$refs.upload1.clearFiles()
        this.img_path = []
      } else {
        this.$refs.upload.clearFiles()
        this.back_path = []
      }
      console.log(type)
    }
  },
  data () {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('请输入正确的手机号'));
        }
      }
    }
    return {
      upload_url: '/api/news/saveOrUpNewsData.htm', // 上传地址,
      upload1: '',
      upload: '',
      img_path: [], // 上传二维码列表
      back_path: [],
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
      dialogFormVisible: false, // 对话框的展开隐藏
      formEdit: { // 修改解决方案数据
        id: null,
        tel: '', // 电话
        webId: '', // 地址
        icpNumb: '', // 邮编
        publicNetworkSecurity: '', // 技术支持
        logoUrl: '', // logo
        name: '', // 名称
        recordNumber: '' // 备案号
      },
      sysUserApproval: {}, // 审核信息
      rules: { // 表单验证.
        tel: [{validator: checkPhone, trigger: 'blur'}], // 电话校验
        webId: [ { required: true, message: '请输入地址', trigger: 'blur'}], // 地址校验
        icpNumb: [
          { required: true, message: '请输入邮编', trigger: 'blur'}
        ], // 邮编
        publicNetworkSecurity: [{ required: true, message: '请输入技术支持', trigger: 'blur'}], // 技术支持
        name: [{ required: true, message: '请输入技术支持', trigger: 'blur'}], // 名称
        recordNumber: [{ required: true, message: '请输入技术支持', trigger: 'blur'}] // 备案号
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
