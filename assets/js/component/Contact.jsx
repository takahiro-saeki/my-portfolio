import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Header extends Component {
  render() {
    const subtitle = classNames(style['col-xs-12'], style['col-sm-4'], style['content-wrap-padding']);
    const input = classNames(style['col-xs-12'], style['col-sm-8'], style['content-wrap-padding']);
    const formWrap = classNames(style['container-fluid'], style['base-width'])
    return (
      <section className={formWrap}>
        <h2>CONTACT</h2>
        <form className={style.row}>
          <label for="name" className={subtitle}>name</label>
          <input type="text" id="name" className={input} />
          <label for="mail" className={subtitle}>email</label>
          <input type="email" id="mail" className={input} />
          <div className={subtitle}>content</div>
          <textarea name="kanso" className={input} />
        </form>
        <div className={style.row}>
          <input type="submit" value="SEND" />
          <input type="reset" value="RESET" />
        </div>
      </section>
    )
  }
}
