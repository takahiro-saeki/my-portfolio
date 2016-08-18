import React, {Component} from 'react';
import classNames from 'classnames';

export default class Icons extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    icon: '',
    size: 'fa-lg',
    aria: 'true',
    styles: {}
  }

  render() {
    return (
      <i className={classNames('fa', this.props.icon, this.props.size)}
         aria-hidden={this.props.aria}
         style={Object.assign({}, this.props.styles)}/>
    )
  }
}
