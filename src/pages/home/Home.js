import HeaderLogo from 'common/header-logo/HeaderLogo'
import HeaderNavLeft from 'common/header-nav-left/HeaderNavLeft'
import HeaderNavRight from 'common/header-nav-right/HeaderNavRight'
import AsideNav from 'common/aside-nav/AsideNav'
import Mains from 'common/mains/Mains'
import Footerbox from '../../common/footerbox/Footer.vue'
import Request from './Request' // 接口调用文件
export default {
  name: 'Home',
  components: {
    HeaderLogo,
    HeaderNavLeft,
    HeaderNavRight,
    AsideNav,
    Mains,
    Footerbox
  },
  data () {
    return {
      headerLogo: {} // 页眉logo数据
    }
  },
  computed: { // 计算属性
    headNavLeft: function () {
      return this.$store.state.headerLeftNav // 页眉左侧导航
    },
    headNavRight: function () {
      return this.$store.state.headerRightNav // 页眉右侧导航
    },
    asideHomeNav: function () {
      return this.$store.state.asideHomeNav // 左侧首页导航
    },
    userInfo: function () {
      return this.$store.state.userInfo // 首页tap页面数据
    }
  },
  // mounted () { // 钩子函数
  // },
  activated () { // 组件被激活调用
    this.$store.dispatch('changeMainHeight', this.$refs.main.$el.offsetHeight) // 记录main高度
    Request.getHomeInfo(this) // 登录成功首页初始化调用页眉logo、left及right导航数据接口
  }
}
