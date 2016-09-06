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

export default class Work extends Component {
  render() {
    const responsive = classNames(style['col-xs-12'], style['col-sm-6'], style['col-md-4'], style.block);
    const img = classNames(style['responsive-img'], style['img-shadow']);
    const imgTest = classNames(style['responsive-img'], style['img-shadow'], style['add-hover']);
    const workWrapper = classNames(style['container-fluid'], style['work-bg']);
    return (
      <section className={workWrapper}>
        <h2 className={style.title}>WORK</h2>
        <ul className={style.row}>
          <li className={responsive}>
            <div style={{position: 'relative', width: '100%', height: '227px'}}>
              <img src={Image1} className={img}/>
              <div className={imgTest}>
                <div style={{
                    position: 'absolute',
                    width: '50px',
                    height: '50px',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    margin: 'auto'
                  }}>
                  テスト
                </div>
              </div>
            </div>
            <h3 style={{margin: '0 auto'}}>book</h3>
            <div>BOOK, PostCSS</div>
          </li>
          <li className={responsive}>
            <img src={Image2} className={img}/>
            <h3 style={{margin: '0 auto'}}>book</h3>
            <div>BOOK, PostCSS</div>
          </li>
          <li className={responsive}>
            <img src={Image3} className={img}/>
            <h3 style={{margin: '0 auto'}}>book</h3>
            <div>BOOK, PostCSS</div>
          </li>
          <li className={responsive}>
            <img src={Media1} className={img}/>
            <h3 style={{margin: '0 auto'}}>DTP</h3>
            <div>Poster</div>
          </li>
          <li className={responsive}>
            <img src={Media2} className={img}/>
            <h3 style={{margin: '0 auto'}}>DTP</h3>
            <div>Poster</div>
          </li>
          <li className={responsive}>
            <img src={github1} className={img}/>
            <h3 style={{margin: '0 auto'}}>DTP</h3>
            <div>Poster</div>
          </li>
          <li className={responsive}>
            <img src={github2} className={img}/>
            <h3 style={{margin: '0 auto'}}>DTP</h3>
            <div>Poster</div>
          </li>
          <li className={responsive}>
            <img src={github3} className={img}/>
            <h3 style={{margin: '0 auto'}}>DTP</h3>
            <div>Poster</div>
          </li>
        </ul>
      </section>
    )
  }
}
