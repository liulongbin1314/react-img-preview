// 1. 导入包 
import React from 'react'
import ReactDOM from 'react-dom'
// 导入缩略图组件
import Preview from '@/components/imgpreview.jsx'

// 专门用于测试的组件
class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      // 所有要展示的图片
      items: [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }
      ]
    }
  }

  render() {
    return <div>
      <Preview imglist={this.state.items} previewBoxStyle={{ border: '1px solid #eee' }} thumbImgStyle={{ margin: 10, width: 100, height: 100 }}></Preview>
    </div>
  }
}

// 3. 把 虚拟DOM挂载到页面上
ReactDOM.render(<div>
  <Test></Test>
</div>, document.getElementById('app'))