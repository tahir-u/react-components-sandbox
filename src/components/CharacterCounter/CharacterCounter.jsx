import React from 'react';

import Counter from './Counter';

class CharacterCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      input: '',
      limit: this.props.limit || 140
    }

    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    const input = e.target.value;
    this.setState({
      input,
      current: input.length
    });
  }

  render() {
    return(
      <div className="input-group">
        <textarea
          className="form-control"
          maxLength={this.state.limit}
          onChange={this.onInput}
        />
        <Counter limit={this.state.limit} current={this.state.current} />
      </div>
    )
  }
}

export default CharacterCounter;