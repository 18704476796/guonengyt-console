import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Request from './Request' // 接口调用文件
export default {
  name: 'NavConfigure',
  components: {
    ScreenBox,
    Tables
  },
  mounted () { // 钩子函数
    Request.findMenuAll(this) // 加载资源管理数据列表
  },
  methods: { // 方法属性
    edit (vals) { // 编辑函数-子组件传递数据修改父组件的数据
      this.disabled = vals
    },
    preservation () { // 保存
      Request.preservation(this)
    },
    newlyAdd () { // 新增导航函数
      Request.newlyAdd(this)
    },
    changeParentId () { // 根据是否增添子级导航来控制导航方向选项卡的现实隐藏
      Request.changeParentId(this)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () { // 创建导航函数
      Request.onSubmit(this)
    },
    onDelete (Id) { // 删除操作
      Request.onDelete(this, Id)
    }
  },
  data () {
    return {
      disabled: true, // 表单为true则不可编辑
      tableData: [], // 表格数据
      tableHeight: this.$store.state.mainHeight - 130, // 76为main顶部及填充值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      parentElement: [{id: 0, name: '无父级'}], // 父级id数组存储
      formBox: [], // form属性数据转存至此加入至axios
      form: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        parentId: 0, // 父级Id
        menuSort: 0, // 排序
        menuName: '', // 名称
        menuImgCode: '', // 图标
        ref: '', // 元素标记
        tabName: '', // 指向标题
        menuUrl: '', // 指向地址
        menuType: 1, // 导航方向 1 左侧 2 右侧
        status: 1, // 状态 1 启用 0 禁用
        id: '0', // 导航Id
        menuList: [] // 子级
      },
      rules: { // 表单验证.
        menuName: { required: true, message: '请输入导航名称', trigger: 'blur' } // 帐号验证
      }
    }
  }
}
