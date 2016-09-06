import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Header extends Component {
  render() {
    const subtitle = classNames(style['col-xs-12'], style['col-sm-4'], style['content-wrap-padding']);
    const input = classNames(style['col-xs-12'], style['col-sm-8'], style['content-input']);
    const formWrap = classNames(style['container-fluid'], style['base-width']);
    const buttonGroup = classNames(style.row, style['around-xs']);
    const submit = classNames(style['col-xs-12'], style['col-md-10'], style['button-submit']);
    const contactWrap = classNames(style.row, style['contact-wrap']);
    return (
      <section className={formWrap}>
        <h2>CONTACT</h2>
        <form className={contactWrap}>
          <label htmlFor="name" className={subtitle}>name</label>
          <input type="text" id="name" className={input} />
          <hr className={style["content-line-border"]} />
          <label htmlFor="mail" className={subtitle}>email</label>
          <input type="email" id="mail" className={input} />
          <hr className={style["content-line-border"]} />
          <div className={subtitle}>content</div>
          <textarea name="kanso" className={input} />
        </form>
        <div className={buttonGroup}>
          <input type="submit" value="SEND" className={submit} />
        </div>
      </section>
    )
  }
}
