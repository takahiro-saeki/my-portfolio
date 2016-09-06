import React, {Component} from 'react';
import classNames from 'classnames';
import Icons from './icons';
import style from '../../css/style';

export default class Social extends Component {
  render() {
    const iconStyle = {
      icon: {
        textAlign: 'center',
        maxWidth: '25%',
        boxSizing: 'border-box',
        flex: '0 0 25%',
        paddingRight: '1rem',
        paddingLeft: '1rem'
      },
      twitter: {
        color: '#55ACEE'
      },
      facebook: {
        color: '#3b5998'
      },
      medium: {
        color: '#00ab6b'
      },
      github: {
        color: '#333333'
      }
    }

    const iconWrap = classNames(style.row, style['social-wrap']);
    const iconClass = classNames(style['col-xs-3'], style['col-sm-3'], style['icon-base']);
    const socialWrapper = classNames(style['container-fluid'], style['social-bg']);

    return (
      <section className={socialWrapper}>
        <div className={iconWrap}>
          <div className={iconClass}>
          <Icons
            icon="fa-twitter"
            size="fa-5x"
            styles={iconStyle.twitter} />
          </div>
          <div className={iconClass}>
          <Icons
            icon="fa-facebook"
            size="fa-5x"
            styles={iconStyle.facebook}/>
          </div>
          <div className={iconClass}>
          <Icons
            icon="fa-medium"
            size="fa-5x"
            styles={iconStyle.medium}/>
          </div>
          <div className={iconClass}>
          <Icons
            icon="fa-github"
            size="fa-5x"
            styles={iconStyle.github}/>
          </div>
        </div>
      </section>
    )
  }
}
