import React from 'react';

export default class Header extends React.PureComponent {

  componentDidMount () {
    this.body = document.querySelector('html');
  }

  clickBar = (e) => {
    if (!e && !e.target) return;
    this.open = !this.open;
    if (!this.bar) this.bar = e.target;
    if (this.open) {
      this.bar.classList.add('close');
      this.nav.classList.add('open');
      // this.bodyTop = window.scrollY;
      // this.body.classList.add('frozen');
    } else {
      this.bar.classList.remove('close');
      this.nav.classList.remove('open');
      // this.body.removeAttribute('class');
      // window.scrollTo({top: this.bodyTop})
    }
    
  }

  clickLogo = () => {
    window.scrollTo({top: 0});
  }

  clickNav = () => {
    if (!this.open) return;
    this.open = false;
    this.bar.classList.remove('close');
    this.nav.classList.remove('open');
  }

  render () {
    return (
      <header>
        <div className="container header">
          <div className="logo" onClick={this.clickLogo}></div>
          <div className="menu" ref={el => this.nav = el} onClick={this.clickNav}>
            <a href="#gandan">产品展示</a>
            <a href="#jianyi">食参建议</a>
            <a href="#about">关于牧葵</a>
            <a href="https://shop363159177.taobao.com/" rel="noopener noreferrer" target="_blank">淘宝店铺</a>
          </div>
          <div className="minibar" onClick={this.clickBar}></div>
        </div>
      </header>
    )
  }
  
}