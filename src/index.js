import React from 'react'
import ReactDOM from 'react-dom'
// 导入预览组件
import Preview from '@/components/imgpreview.jsx'

// 专门用于测试的组件
class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      // 所有要进行预览的图片
      // 每一个图片对象，都要包含如下三个属性：{src, w, h}
      // 其中：
      // src 是图片的地址
      // w 是图片预览时候的宽度
      // h 是图片预览时候的高度
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
      <Preview
        // 指定 要预览的图片数组
        imglist={this.state.items}
        // 设置 缩略图容器的样式
        previewBoxStyle={{ border: '1px solid #eee' }}
        // 设置 缩略图的样式
        thumbImgStyle={{ margin: 10, width: 100, height: 100 }}>
      </Preview>
    </div>
  }
}

// 把 虚拟DOM挂载到页面上
ReactDOM.render(<div>
  <Test></Test>
</div>, document.getElementById('app'))