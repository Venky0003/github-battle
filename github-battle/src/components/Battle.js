import React from 'react';
import Instructions from './Instructions';
import Form from './Form';
import Result from './Result';
class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: '',
      user2: '',
      data1: null,
      data2: null,
      winner: null,
      looser: null,
      entry: false,
      user1Score: 0,
      user2Score: 0,
    };
  }

  handleFetch = (username, userNumber) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (userNumber === 1) {
          this.setState({ data1: data });
        } else if (userNumber === 2) {
          this.setState({ data2: data });
        }
      })
      .catch((error) => {
        console.log('Error fetching', error);
      });
  };

  // handleSubmitOne = (e) => {
  //   e.preventDefault();
  //   const { user1 } = this.state;
  //   this.handleFetch(user1, 1);
  // };
  
  handleSubmit = (e,userNum) => {
    e.preventDefault();
    const { user1,user2 } = this.state;
    const userToFetch = userNum === 1 ? user1 : user2
    this.handleFetch(userToFetch, userNum);
  };


  // handleSubmitWinner = (e) => {
  //   e.preventDefault();
  //   this.calculateWinner();
  // };

  handleChange = (e, field) => {
    const { value } = e.target;
    this.setState({ [field]: value });
  };

  calculateWinner = () => {
    const { data1, data2 } = this.state;
    const pointToFollower = 20;
    // console.log('Data 1:', data1);
    // console.log('Data 2:', data2);

    let user1Score = (data1.followers * pointToFollower) + data1.public_repos;
    let user2Score = (data2.followers * pointToFollower) + data2.public_repos;

    // console.log('user 1 score:', user1Score);
    // console.log('user 2 score:', user2Score);

    this.setState({
      user1Score: user1Score,
      user2Score: user2Score,
    });

    if (user1Score > user2Score) {
      this.setState({ winner: 'user1', looser: 'user2' });
    } else if (user2Score > user1Score) {
      this.setState({ winner: 'user2', looser: 'user1' });
    } else {
      this.setState({ winner: 'tie', looser: 'tie' });
    }
  };

  handleState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleReset = () => {
    this.setState({
      user1: '',
      user2: '',
      data1: null,
      data2: null,
      winner: null,
      loser: null,
      entry: false,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          {!this.state.entry ? (
            <div>
              <Instructions />
              <Form
                data1={this.state.data1}
                data2={this.state.data2}
                user1={this.state.user1}
                user2={this.state.user2}
                entry={this.state.entry}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleState={this.handleState}
                calculateWinner={this.calculateWinner}
              />
            </div>
          ) : (
            <Result
            winner={this.state.winner}
            looser={this.state.looser}
            data1={this.state.data1}
            data2={this.state.data2}
            user1Score={this.state.user1Score}
            user2Score={this.state.user2Score}
            handleReset={this.handleReset}
          />
          )}
        </div>
      </>
    );
  }
}

export default Battle;
