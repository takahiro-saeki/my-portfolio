import React, {Component} from 'react';
import classNames from 'classnames';
import Icons from './icons';
import style from '../../css/style';

export default class Social extends Component {

  location(url) {
    location.assign(url)
  }

  render() {
    const URL = {
      twitter: 'https://twitter.com/hirodeath',
      facebook: 'https://www.facebook.com/profile.php?id=100008247964402',
      medium: 'https://medium.com/@hirodeath',
      github: 'https://github.com/takahiro-saeki'
    }

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
      },
      linkPointer: {
        cursor: 'pointer'
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
            styles={Object.assign({}, iconStyle.twitter, iconStyle.linkPointer)}
            clicks={() => this.location(URL.twitter)}
            />
          </div>
          <div className={iconClass}>
          <Icons
            icon="fa-facebook"
            size="fa-5x"
            styles={Object.assign({}, iconStyle.facebook, iconStyle.linkPointer)}
            clicks={() => this.location(URL.facebook)}/>
          </div>
          <div className={iconClass}>
          <Icons
            icon="fa-medium"
            size="fa-5x"
            styles={Object.assign({}, iconStyle.medium, iconStyle.linkPointer)}
            clicks={() => this.location(URL.medium)}/>
          </div>
          <div className={iconClass}>
          <Icons
            icon="fa-github"
            size="fa-5x"
            styles={Object.assign({}, iconStyle.github, iconStyle.linkPointer)}
            clicks={() => this.location(URL.github)}/>
          </div>
        </div>
      </section>
    )
  }
}
