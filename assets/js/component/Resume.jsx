import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';

export default class Resume extends Component {
  render() {
    const boxLeft = classNames(style['col-xs-12'], style['col-md-4'], style['resume-margin']);
    const boxRight = classNames(style['col-xs-12'], style['col-md-8'], style['resume-margin']);
    const first = classNames(style['resume-box'], style.first);
    const second = classNames(style['resume-box'], style.second);
    const third = classNames(style['resume-box'], style.third);
    const fourth = classNames(style['resume-box'], style.fourth);
    const description =classNames(style['resume-box'], style['resume-desc'])
    return (
      <div className={style['container-fluid']}>
        <h2 style={{textAlign: 'center'}}>WORK-EXPERIENCE</h2>
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
              I implemented the function of mobile and web application.<br />
              I used ECMAScript 2015, grunt, browserify, and some modern library.
            </div>
          </div>

          <div className={boxLeft}>
            <div className={second}>
              <h2>life style company</h2>
              <h3>2015/8 ~ 2016/2</h3>
            </div>
          </div>
        </section>
        <section className={style.row}>
          <div className={boxLeft}>
            <div className={third}>
              <h2>web application company</h2>
              <h3>2015/2 ~ 2015/7</h3>
            </div>
          </div>
          <div className={boxRight}>
            <div className={style['resume-box']}>
              I implemented some html and css and javascript(jQuery) code.
              and, I made some Image by using photoshop.
            </div>
          </div>
        </section>
        <section className={style.row}>
          <div className={boxRight}>
            <div className={style['resume-box']}>
              I made some website and some design for photoshop and illustrator and some banner.<br />
              I got the good experience to make web site and design.
            </div>
          </div>

          <div className={boxLeft}>
            <div className={fourth}>
              <h2>P.I.Square</h2>
              <h3>2014/5 ~ 2014/10</h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
