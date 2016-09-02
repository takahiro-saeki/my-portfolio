import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Header extends Component {
  render() {
    return (
      <section className={style['container-fluid']}>
        <form className={style.row}>
          <label for="name">name</label>
          <input type="text" id="name" />
        </form>
      </section>
    )
  }
}
