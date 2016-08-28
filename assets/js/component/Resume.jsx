import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Resume extends Component {
  render() {
    const boxLeft = classNames(style['col-xs-12'], style['col-md-4'], style['resume-margin']);
    const boxRight = classNames(style['col-xs-12'], style['col-md-8'], style['resume-margin']);
    const first = classNames(style['resume-box'], style.first);
    const description =classNames(style['resume-box'], style['resume-desc'])
    return (
      <div className={style['container-fluid']}>
        <section className={style.row}>
          <div className={boxLeft}>
            <div className={first}>
              <h2>mobile game company</h2>
              <h3>2016/5 ~ 2016/6</h3>
            </div>
          </div>
          <div className={boxRight}>
            <div className={style['resume-box']}>
              I implemented the function of social matching service application.<br />
              I used ECMAScript 2015, gulp, React.js, PostCSS, and some modern library.
            </div>
          </div>
        </section>
        <section className={style.row}>
          <div className={boxRight}>
            <div className={style['resume-box']}>
              I implemented the function of social matching service application.<br />
              I used ECMAScript 2015, gulp, React.js, PostCSS, and some modern library.
            </div>
          </div>

          <div className={boxLeft}>
            <div className={first}>
              <h2>mobile game company</h2>
              <h3>2016/5 ~ 2016/6</h3>
            </div>
          </div>
        </section>
        <section className={style.row}>
          <div className={boxLeft}>
            <div className={first}>
              <h2>mobile game company</h2>
              <h3>2016/5 ~ 2016/6</h3>
            </div>
          </div>
          <div className={boxRight}>
            <div className={style['resume-box']}>
              I implemented the function of social matching service application.<br />
              I used ECMAScript 2015, gulp, React.js, PostCSS, and some modern library.
            </div>
          </div>
        </section>
        <section className={style.row}>
          <div className={boxRight}>
            <div className={style['resume-box']}>
              I implemented the function of social matching service application.<br />
              I used ECMAScript 2015, gulp, React.js, PostCSS, and some modern library.
            </div>
          </div>
          
          <div className={boxLeft}>
            <div className={first}>
              <h2>mobile game company</h2>
              <h3>2016/5 ~ 2016/6</h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
