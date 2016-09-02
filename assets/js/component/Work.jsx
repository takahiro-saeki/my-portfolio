import React, {Component} from 'react';
import classNames from 'classnames';
import Image1 from '../../img/book1.png';
import Image2 from '../../img/book2.png';
import Image3 from '../../img/book3.png';
import Media1 from '../../img/media1.png';
import Media2 from '../../img/media2.png';
import style from '../../css/style';

export default class Work extends Component {
  render() {
    const responsive = classNames(style['col-xs-12'], style['col-sm-6'], style['col-md-4'], style.hoverImg)
    return (
      <section className={style['container-fluid']}>
        <h2>WORK</h2>
        <ul className={style.row}>
          <li className={responsive}>
            <img src={Image1} className={style['responsive-img']}/>
            <h3 style={{margin: '0 auto'}}>book</h3>
            <div>BOOK, PostCSS</div>
          </li>
          <li className={responsive}>
            <img src={Image2} className={style['responsive-img']}/>
            <h3 style={{margin: '0 auto'}}>book</h3>
            <div>BOOK, PostCSS</div>
          </li>
          <li className={responsive}>
            <img src={Image3} className={style['responsive-img']}/>
            <h3 style={{margin: '0 auto'}}>book</h3>
            <div>BOOK, PostCSS</div>
          </li>
          <li className={responsive}>
            <img src={Media1} className={style['responsive-img']}/>
            <h3 style={{margin: '0 auto'}}>DTP</h3>
            <div>Poster</div>
          </li>
          <li className={responsive}>
            <img src={Media2} className={style['responsive-img']}/>
            <h3 style={{margin: '0 auto'}}>DTP</h3>
            <div>Poster</div>
          </li>
        </ul>
      </section>
    )
  }
}
