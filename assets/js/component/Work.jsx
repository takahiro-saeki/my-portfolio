import React, {Component} from 'react';
import classNames from 'classnames';
import Image1 from '../../img/book1.png';
import Image2 from '../../img/book2.png';
import Image3 from '../../img/book3.png';
import style from '../../css/style';

export default class Work extends Component {
  render() {
    const responsive = classNames(style['col-xs-12'], style['col-sm-6'], style['col-md-4'])
    return (
      <section className={style['container-fluid']}>
        <ul className={style.row}>
          <li className={responsive}><img src={Image1} className={style['responsive-img']}/></li>
          <li className={responsive}><img src={Image2} className={style['responsive-img']}/></li>
          <li className={responsive}><img src={Image3} className={style['responsive-img']}/></li>
        </ul>
      </section>
    )
  }
}
