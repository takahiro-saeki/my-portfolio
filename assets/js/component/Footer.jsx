import React, {Component} from 'react';
import style from '../../css/style';

export default class Footer extends Component {
  render() {
    const date = new Date().getFullYear();
    return (
      <div className={style['footer-menu']}>
        <footer>© {date} takahiro-saeki</footer>
      </div>
    )
  }
}
