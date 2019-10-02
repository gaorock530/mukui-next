import React from 'react'
import Meta from '../components/meta';
import Nav from '../components/header';
import Dangan from '../components/sec_dangan';
import Jishi from '../components/sec_jishi';
import Jianyi from '../components/sec_jianyi';
import About from '../components/sec_about';
import Footer from '../components/footer';
import '../style/index.scss';


const Home = () => (
  <div>
    <Meta/>
    <Nav />
    <div className="placeholder"></div>
      <section className="sec-bg" id="start"></section>
      <Dangan/>
      <section className="sec-dangan">
        <div className="container">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </section>
      <Jishi/>
      <section className="sec-jishi">
        <div className="container">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          牧葵独有的特殊工艺，最大限度的锁住营养成分，每一口咬下去，都可以感受到参肉有力道回馈于牙齿的弹力，不用费力就可以嚼烂，但是绝不会轻易嚼碎，区别于市面上所有海参的筋道口感称为“牧葵筋”。          </p>
        </div>
      </section>
      <Jianyi/>
      <About/>
      <Footer/>
  </div>
)

export default Home
