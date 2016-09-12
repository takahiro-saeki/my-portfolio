import React, {Component} from 'react';
import classNames from 'classnames';
import Image1 from '../../img/book1.png';
import Image2 from '../../img/book2.png';
import Image3 from '../../img/book3.png';
import Media1 from '../../img/media1.png';
import Media2 from '../../img/media2.png';
import github1 from '../../img/github1.png';
import github2 from '../../img/github2.png';
import github3 from '../../img/github3.png';
import style from '../../css/style';

const URL = {
  PDF_1: 'http://hiro.eek.jp/work1.pdf',
  PDF_2: 'http://hiro.eek.jp/work2.pdf',
  BOOK: 'http://mohu-para.com/comitia116/',
  GIT_1: 'https://github.com/takahiro-saeki/react-recharts-sandbox',
  GIT_2: 'https://github.com/takahiro-saeki/react-wp-rest-api',
  GIT_3: 'https://github.com/takahiro-saeki/react-politicians-library'
}

export default class Work extends Component {
  location(url) {
    window.open(url, '_blank');
  }

  render() {
    const responsive = classNames(style['col-xs-12'], style['col-sm-6'], style['col-md-4'], style.block);
    const img = classNames(style['responsive-img'], style['img-shadow']);
    const imgTest = classNames(style['responsive-img'], style['img-shadow'], style['add-hover']);
    const workWrapper = classNames(style['container-fluid'], style['work-bg']);
    return (
      <section className={workWrapper} id="WORK">
        <h2 className={style.title}>WORK</h2>
        <ul className={style.row}>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.BOOK)}>
              <img src={Image1} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>WEB SITE</div>
              </div>
            </div>
            <h3>アナタに捧げるフロントエンド実践マニュアル</h3>
            <div>BOOK, PostCSS</div>
          </li>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.BOOK)}>
              <img src={Image2} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>WEB SITE</div>
              </div>
            </div>
            <h3>アタシが教えてnode.jsア・ゲ・ル♥ node.js実践マニュアル</h3>
            <div>BOOK, PostCSS</div>
          </li>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.BOOK)}>
              <img src={Image3} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>WEB SITE</div>
              </div>
            </div>
            <h3>キミと一緒に学びたいECMAScript2015</h3>
            <div>BOOK, ECMAScript2015</div>
          </li>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.PDF_2)}>
              <img src={Media1} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>WEB SITE</div>
              </div>
            </div>
            <h3>遺言、相続のポスター</h3>
            <div>Poster</div>
          </li>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.PDF_1)}>
              <img src={Media2} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>WEB SITE</div>
              </div>
            </div>
            <h3>治療院、開業</h3>
            <div>Poster</div>
          </li>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.GIT_1)}>
              <img src={github1} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>GitHub</div>
              </div>
            </div>
            <h3>react-recharts-sandbox</h3>
            <div>React.js</div>
          </li>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.GIT_2)}>
              <img src={github2} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>GitHub</div>
              </div>
            </div>
            <h3>react-wp-rest-api</h3>
            <div>wp-rest-api, React.js</div>
          </li>

          <li className={responsive}>
            <div className={style['work-list']} onClick={() => this.location(URL.GIT_3)}>
              <img src={github3} className={img}/>
              <div className={imgTest}>
                <div className={style['hover-text']}>GitHub</div>
              </div>
            </div>
            <h3>react-politicians-library</h3>
            <div>React.js</div>
          </li>
        </ul>
      </section>
    )
  }
}
