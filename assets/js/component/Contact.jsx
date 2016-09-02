import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Header extends Component {
  render() {
    return (
      <section className={style['container-fluid']}>
        <h2>CONTACT</h2>
        <form className={style.row}>
          <label for="name">name</label>
          <input type="text" id="name" />
          <label for="mail">name</label>
          <input type="email" id="mail" />
          <textarea name="kanso" />
        </form>
      </section>
    )
  }
}
