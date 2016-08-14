import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Skill extends Component {
  render() {
    return (
      <section className={style['container-fluid']}>
        <div className={classNames(style.row, style['center-xs'])}>
          <h2 className={style['col-xs-6']}>見出しテスト</h2>
        </div>
        <div className={style.row}>
          <div className={style['col-xs-3']}>テスト</div>
          <div className={style['col-xs-3']}>テスト</div>
          <div className={style['col-xs-3']}>テスト</div>
          <div className={style['col-xs-3']}>テスト</div>
        </div>
      </section>
    )
  }
}
