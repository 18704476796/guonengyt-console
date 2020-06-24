export default {
  props: {
    asideNav: Array
  },
  render: function (createElement) {
    if (item.son) {
      return createElement('el-submenu', {
        attrs: {
          key: item.url,
          index: item.son
        }
      }, [
        createElement ('template', {
          slot: 'title'
        },[
          createElement ('i', {
            attrs: {
              'class': 'iconfont'
            }
          },[
            item.icon
          ])
        ])
      ])
    } else {
      return createElement('el-menu-item')
    }
  }
}
