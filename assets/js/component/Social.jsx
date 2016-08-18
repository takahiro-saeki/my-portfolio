import React, {Component} from 'react';
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

    return (
      <section className={style['container-fluid']}>
        <div className={style.row}>
          <Icons
            icon="fa-twitter"
            size="fa-5x"
            styles={Object.assign({}, iconStyle.icon, iconStyle.twitter)}/>
          <Icons
            icon="fa-facebook"
            size="fa-5x"
            styles={Object.assign({}, iconStyle.icon, iconStyle.facebook)}/>
          <Icons
            icon="fa-medium"
            size="fa-5x"
            styles={Object.assign({}, iconStyle.icon, iconStyle.medium)}/>
          <Icons
            icon="fa-github"
            size="fa-5x"
            styles={Object.assign({}, iconStyle.icon, iconStyle.github)}/>
        </div>
      </section>
    )
  }
}
