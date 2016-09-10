import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Contact extends Component {
  render() {
    const subtitle = classNames(style['col-xs-12'], style['col-sm-4'], style['content-wrap-padding']);
    const input = classNames(style['col-xs-12'], style['col-sm-8'], style['content-input']);
    const formWrap = classNames(style['container-fluid'], style['base-width'], style['contact-bg']);
    const buttonGroup = classNames(style.row, style['around-xs']);
    const submit = classNames(style['col-xs-12'], style['col-md-4'], style['button-submit']);
    const textarea = classNames(style['col-xs-12'], style['col-sm-8'], style['content-textarea']);
    const contactWrap = classNames(style.row, style['contact-wrap'], 'formrun');
    return (
      <section className={formWrap} id="CONTACT">
        <h2 className={style.title}>CONTACT</h2>
        <form className={contactWrap} action="https://form.run/api/v1/r/jtbMRyJTs0cSTI4phiqC" method="post">
          <label htmlFor="name" className={subtitle}>name</label>
          <input type="text" id="name" name="name" className={input} />
          <hr className={style["content-line-border"]} />
          <label htmlFor="mail" className={subtitle}>email</label>
          <input type="email" id="mail" className={input} name="email" />
          <hr className={style["content-line-border"]} />
          <div className={subtitle}>content</div>
          <textarea name="kanso" className={textarea} name="contact" />
          <input type="submit" value="SEND" className={submit} />
        </form>
      </section>
    )
  }
}
