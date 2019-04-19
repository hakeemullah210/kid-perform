import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kid from './components/Kid.jsx'
import Teacher from './components/Teacher.jsx'
import Judge from './components/Judge.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0,
      kidLeft: false,
      judgeLeft: false

    }
    this.updateSteps = this.updateSteps.bind(this)
    this.getApplaud = this.getApplaud.bind(this)
    this.qualified = this.qualified.bind(this);
    this.kidUnmount = this.kidUnmount.bind(this);
    this.judgeUnmount = this.judgeUnmount.bind(this)

  }
  static getDerivedStateFromProps() {
    // console.log('get')
    return {
      volume: 5,

    }
  }
  updateSteps(steps) {
    // console.log('updateSteps', steps)
    this.setState({ furtherSteps: steps })
  }

  getApplaud() {
    // console.log('applaudPerform',emo)
    this.setState({ isApplaud: true })
    // console.log('getApplaud calling',this.state.isApplaud);

  }
  qualified() {
    this.setState({ isQualified: true })
  }
  kidUnmount() {
    this.setState({ kidLeft: true })

  }
  componentWillUnmount() {

  }
  judgeUnmount() {
    console.log('judgeUnmount');
    this.setState({ judgeLeft: true })
  }
  render() {
    const { volume, furtherSteps, kidLeft, judgeLeft } = this.state
    // console.log('render',this.state.isApplaud)
    // console.log('volume', volume)
    // console.log('furtherSteps', furtherSteps)
    // console.log('emotion',this.state.emotion)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Kid</h1>
          {
            !kidLeft &&
            <Kid dressColor='yellow' judgeUnmount={this.judgeUnmount} applaud={this.state.isApplaud} furtherSteps={furtherSteps} />
          }
          <h1>Teacher</h1>
          <Teacher updateSteps={this.updateSteps} />
          <h1>Judge</h1>
          {
            !judgeLeft &&
            <Judge kidLeft={kidLeft} getApplaud={this.getApplaud} qualified={this.qualified} />
          }
          <button onClick={this.kidUnmount}  >Ask the Kid to Leave the Show</button>
        </header>
      </div>
    );
  }
}

export default App;
