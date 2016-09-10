import React, {Component} from 'react';
import smoothScroll from 'smooth-scroll';
import style from '../../css/style';

export default class Header extends Component {
  link(elem) {
    const anchor = document.querySelector(elem);
    smoothScroll.animateScroll(anchor);
  }

  render() {
    smoothScroll.init({
      selector: '[data-scroll]',
      selectorHeader: null,
      speed: 800,
      easing: 'easeInOutCubic',
      offset: 50,
      callback: function ( anchor, toggle ) {} // Function to run after scrolling
    });
    return (
      <header className={style.navbar}>
        <div className={style['container-fluid']}>
          <div className={style.row}>
            <div className={style['col-xs-12']}>
              <div className={style.row}>
                <div className={style['col-xs-3']} onClick={() => this.link('#SKILL')}>SKILL</div>
                <div className={style['col-xs-3']} onClick={() => this.link('#WORK')}>WORK</div>
                <div className={style['col-xs-3']} onClick={() => this.link('#TIMELINE')}>TIMELINE</div>
                <div className={style['col-xs-3']} onClick={() => this.link('#CONTACT')}>CONTACT</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
