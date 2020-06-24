import Request from './Request.js' // 接口文件
export default {
  name: 'Jurisdiction',
  data () {
    return {
      roleSelection: null, // 选中的角色
      roleList: [], // [{ id: '1', name: '角色1' }], // 角色列表
      unauthorized: [], // [{ label: '权限1', key: 1 }] // 未拥有权限
      hasPermission: [1], // 已拥有权限
      filterMethod (query, item) { // 搜索项
        return item.label.indexOf(query) > -1
      },
      tableHeight: this.$store.state.mainHeight - 76, // 76为main顶部及填充值
      roleHeight: this.$store.state.mainHeight - 116 // 76为main顶部及填充值
    }
  },
  methods: {
    onRoleSelection () { // 切换角色时，更新权限数据
      Request.getInfo(this, this.roleSelection)
    },
    handleChange () { // 已拥有权限变化时执行函数
      Request.handleChange(this, this.roleSelection, this.hasPermission)
    }
  },
  mounted () { // 钩子函数
    // 设置穿梭框内的高度自适应浏览器
    this.$refs.transfer.$refs.leftPanel.$el.children[1].children[1].style.height = this.roleHeight - 65 + 'px'
    this.$refs.transfer.$refs.rightPanel.$el.children[1].children[1].style.height = this.roleHeight - 65 + 'px'
    Request.getInfo(this, this.roleSelection)
  }
}
