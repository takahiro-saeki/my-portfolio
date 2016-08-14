import React, {Component} from 'react';
import style from '../../css/style';

export default class Header extends Component {
  render() {
    return (
      <header className={style.navbar}>
        <div className={style['container-fluid']}>
        <div className={style.row}>
          <div className={style['col-xs-12']}>
            <div className={style.row}>
              <div className={style['col-xs-3']}>intro</div>
              <div className={style['col-xs-3']}>work</div>
              <div className={style['col-xs-3']}>contact</div>
              <div className={style['col-xs-3']}>skill</div>
            </div>
          </div>
        </div>
      </div>
      </header>
    )
  }
}
