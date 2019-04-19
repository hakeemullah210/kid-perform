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

    }
    this.updateSteps = this.updateSteps.bind(this)
    this.getApplaud=this.getApplaud.bind(this)
    this.qualified=this.qualified.bind(this);

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
    this.setState({isApplaud:true})
    console.log('getApplaud calling',this.state.isApplaud);

  }
  qualified(){
    this.setState({isQualified:true})
  }

  render() {
    const { volume, furtherSteps } = this.state
    // console.log('render',this.state.isApplaud)
    // console.log('volume', volume)
    // console.log('furtherSteps', furtherSteps)
    // console.log('emotion',this.state.emotion)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Kid dressColor='yellow' applaud={this.state.isApplaud} furtherSteps={furtherSteps}  />
          <Teacher updateSteps={this.updateSteps} />
          <Judge getApplaud={this.getApplaud} qualified={this.qualified}/>
        </header>
      </div>
    );
  }
}

export default App;
