import React from 'react';
import { Button } from 'reactstrap';

import VotingEntry from './VotingEntry';

class Voting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: this.props.candidates || ['Alice', 'Bob', 'Carol'],
      totalVotes: 0,
      voteTally: {}
    }

    this.generateEntries = this.generateEntries.bind(this);
    this.generateCandidateVoteButtons = this.generateCandidateVoteButtons.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.getLeadCandidate = this.getLeadCandidate.bind(this);
  }

  componentDidMount() {
    let voteTally = this.state.candidates.map((c) => [c, 0]);
    voteTally = Object.assign(...voteTally.map((v) => ({ [v[0]]: v[1] })));
    
    this.setState({
      voteTally
    });
  }

  generateEntries() {
    const { candidates, voteTally } = this.state;
    const entries = candidates.map((candidate) => {
      return <VotingEntry key={candidate} name={candidate} votes={voteTally[candidate]} />
    });

    return entries;
  }

  generateCandidateVoteButtons() {
    const buttons = this.state.candidates.map((candidate) => {
      return(
        <React.Fragment key={candidate}>
          <Button color="primary" onClick={this.handleVote}>{candidate}</Button>&nbsp;
        </React.Fragment>
      )
    });

    return buttons;
  }

  handleVote(e) {
    e.preventDefault();
    const candidate = e.currentTarget.innerHTML;

    this.setState((prevState) => ({
      voteTally: { ...prevState.voteTally, [candidate]: prevState.voteTally[candidate] + 1 }
    }))
  }

  getLeadCandidate() {
    const voteTally = this.state.voteTally;
    const lead = Object.keys(voteTally).filter((v) => {
      return voteTally[v] === Math.max.apply(null, Object.values(voteTally));
    });

    return lead.length === this.state.candidates.length ?
      'No one has the lead yet.' :
      lead[0] + ' has the lead.';
  }

  render() {
    return(
      <div className="card">
        <div className="card-body">
          {this.generateEntries()}
          <h5>Click to vote!</h5>
          {this.generateCandidateVoteButtons()}
          <br/><br/>
          <p>
            {this.getLeadCandidate()}
          </p>
        </div>
      </div>
    );
  }
};

export default Voting;