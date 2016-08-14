import React, {Component} from 'react';
import style from '../../css/style';

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
    console.log(window.innerHeight)
    this.setState({
      height: window.innerHeight
    })
  }

  render() {
    return (
      <section className={style['bg-test']} style={{height: this.state.height}}>
        <div>テスト</div>
      </section>
    )
  }
}
