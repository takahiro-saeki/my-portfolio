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
      <section className={style['bg-test']} style={{height: this.state.height}}>
        <div style={{
            width: "100%",
            height: "100%",
            background: "rgba(51,51,51,0.5)"
          }}>
          <div style={{
              position: "absolute",
              width: "100%",
              height: "170px",
              maxWidth: "800px",
              textAlign: "center",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              margin: "auto",
              color: "#FFF"
            }}>
            <img src={hiro} style={{
                width: "150px",
                height: "auto",
                borderRadius: "50%",
                marginBottom: "1rem"
              }} />
            <br />TAKAHIRO-SAEKI.
            <br />I'm front-end developer.
            </div>
        </div>
      </section>
    )
  }
}
