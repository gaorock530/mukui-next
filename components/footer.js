import React from 'react';

export default class Footer extends React.PureComponent {

  //  src="assets/utils/douyin.png" alt="douyin"
  constructor (props) {
    super(props);
    this.index = 0;
  }

  showDouyin = () => {
    if (this.index !== 1) {
      this.img.src = "/static/assets/utils/douyin.png";
      this.index = 1;
      this.img.classList.remove('closeCQ');
    } else {
      this.index = 0;
      this.img.classList.add('closeCQ');
    }
  }

  showWeixin = () => {
    if (this.index !== 2) {
      this.img.src = "/static/assets/utils/weixin.jpeg";
      this.index = 2;
      this.img.classList.remove('closeCQ');
    } else {
      this.index = 0;
      this.img.classList.add('closeCQ');
    }
  }

  close = () => {
    this.index = 0;
    this.img.classList.add('closeCQ');
  }


  render () {
    return (
      <footer className="footer">
        <div className="contact">
          <img ref={el => this.img = el} alt="" src="" onClick={this.close} className="closeCQ"></img>
          <a className="c1" href="https://shop363159177.taobao.com/" rel="noopener noreferrer" target="_blank"><div></div></a>
          <div className="c2" ref={el => this.douyin = el} onClick={this.showDouyin}></div>
          <a className="c3" href="https://weibo.com/470038388" rel="noopener noreferrer" target="_blank"><div></div></a>
          <div className="c4" ref={el => this.weixin = el} onClick={this.showWeixin}></div>
        </div>
        <h3>400 - 0373 - 909</h3>
        <p>河南省内免费配送  Copyright © 2019 Mukui. 保留所有权利。</p>
      </footer>
    )
  }
  
}