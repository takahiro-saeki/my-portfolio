import React, {Component} from 'react';
import style from '../../css/style';
import hiro from '../../img/hiro.jpg';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
    this.windowSize = this.windowSize.bind(this);
  }

  componentDidMount() {
    this.windowSize();
  }

  windowSize() {
    this.setState({
      height: window.innerHeight
    })
  }

  render() {
    return (
      <section className={style['main-bg']} style={{height: this.state.height}}>
        <div className={style['intro-wrap']}>
          <div className={style['intro-icon-wrap']}>
            <img src={hiro} className={style['intro-icon']} />
            <br />TAKAHIRO-SAEKI.
            <br />I'm front-end developer.
            </div>
        </div>
      </section>
    )
  }
}
