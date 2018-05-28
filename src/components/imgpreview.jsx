import React from 'react'
import ReactPropTypes from 'prop-types'

// Core CSS file
import 'photoswipe/dist/photoswipe.css'
// Skin CSS file (styling of UI - buttons, caption, etc.)
// In the folder of skin CSS file there are also:
// - .png and .svg icons sprite, 
// - preloader.gif (for browsers that do not support CSS animations)
import 'photoswipe/dist/default-skin/default-skin.css'
// Core JS file
import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js'
// UI JS file
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js'

// 图片预览组件
export default class ImgPreview extends React.Component {
  // 属性默认值
  static defaultProps = {
    // 默认缩略图容器的样式
    previewBoxStyle: {},
    // 默认缩略图的样式
    thumbImgStyle: { width: 100, height: 100, margin: 10, cursor: 'pointer' },
    // 需要进行预览的图片
    imglist: [
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

  // 属性类型校验
  static propTypes = {
    previewBoxStyle: ReactPropTypes.object,
    thumbImgStyle: ReactPropTypes.object,
    imglist: ReactPropTypes.array.isRequired
  }

  // 构造函数
  constructor() {
    super()
    this.state = {}
  }

  // 渲染虚拟DOM的render方法
  render() {
    return <div>
      {/* 盛放缩略图的容器 */}
      <div style={this.props.previewBoxStyle}>
        {
          this.props.imglist.map((item, i) => {
            // 每一个缩略图
            return <img
              key={i}
              src={item.src}
              style={this.props.thumbImgStyle}
              onClick={() => this.showPreview(i)} />
          })
        }
      </div>

      {/* Root element of PhotoSwipe. Must have class pswp. */}
      <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">

        {/* Background of PhotoSwipe.
             It's a separate element as animating opacity is faster than rgba(). */}
        <div className="pswp__bg"></div>

        {/* Slides wrapper with overflow:hidden. */}
        <div className="pswp__scroll-wrap">

          {/* Container that holds slides.
              PhotoSwipe keeps only 3 of them in the DOM to save memory.
              Don't modify these 3 pswp__item elements, data is added later on. */}
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>

          {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
          <div className="pswp__ui pswp__ui--hidden">

            <div className="pswp__top-bar">

              {/*  Controls are self-explanatory. Order can be changed. */}

              <div className="pswp__counter"></div>

              <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

              <button className="pswp__button pswp__button--share" title="Share"></button>

              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

              {/* Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR */}
              {/* element will get class pswp__preloader--active when preloader is running */}
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>

            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>

          </div>

        </div>

      </div>
    </div>
  }

  // 组件完成了挂载
  componentDidMount() {
    // this.showPreview()
  }

  // 展示图片预览
  showPreview = (i) => {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: i // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.props.imglist, options);
    gallery.init();
  }
}