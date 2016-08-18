import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';
import FontIcon from 'material-ui/FontIcon';

export default class Skill extends Component {
  render() {
    return (
      <section className={style['container-fluid']}>
        <div className={classNames(style.row, style['center-xs'])}>
          <h2 className={style['col-xs-6']}>SKILL LIST</h2>
        </div>
        <div className={style.row}>
          <div className={style['col-xs-4']}>
            <div style={{padding: '1rem', border: '1px solid #ccc'}}>
            <i className="material-icons">language</i>
            <h3>Language</h3>
            <div>I’m front-end developer. Although my speciality is javascript, I can use several language. Especially, I like language that I get involved with front-end development.</div>
            <div>I can use languages: HTML5, CSS3, javascript, ECMAScript 2015&2016, PHP.</div>
            </div>
          </div>
          <div className={style['col-xs-4']}>
            <div style={{padding: '1rem', border: '1px solid #ccc'}}>
            <i className={classNames('material-icons', style['md-50'])}>work</i>
            <h3>Language</h3>
            <div>I’m front-end developer. Although my speciality is javascript, I can use several language. Especially, I like language that I get involved with front-end development.</div>
            <div>I can use languages: HTML5, CSS3, javascript, ECMAScript 2015&2016, PHP.</div>
            </div>
          </div>
          <div className={style['col-xs-4']}>
            <i className="material-icons">query_builder</i>
          </div>
          <div className={style['col-xs-4']}>
            <i className="material-icons">photo_library</i>
          </div>
          <div className={style['col-xs-4']}>
            <i className="material-icons">import_export</i>
          </div>
          <div className={style['col-xs-4']}>
            <i className="material-icons">verified_user</i>
          </div>
        </div>
      </section>
    )
  }
}
