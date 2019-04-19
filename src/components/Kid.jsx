import React,{Component} from 'react';

export default class Kid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false };
  }

  qualified() {
    if(this.state.startedPerforming && this.props.applaud ){

      this.setState({ startedPerforming: false })
    }
  }
  componentDidMount() {
    // console.log('Kid', 'componentDidMount')
    this.setState({ danceSteps: ['step1', 'step2'] })
  }
  static getDerivedStateFromProps(props,state){
    // console.log('get Kid')
    if(props.furtherSteps.length && state.danceSteps.length !==5 ){
      return {
        danceSteps:state.danceSteps.concat(props.furtherSteps),
        startedPerforming:true
      }
    }
    if(props.applaud){
      console.log('get=====>',props.applaud)
      return{
        emotion:'happy'
      }
    }
  }

  componentDidUpdate(){
    // console.log('componentDidUpdate')
    this.qualified();
  }
  render() {
    console.log(this.props)
    const { dressColor,furtherSteps } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
    // console.log('danceSteps',danceSteps)
    // console.log('further steps',furtherSteps)
    // console.log('emotion kid',emotion)
    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion}</div>
        {startedPerforming &&
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
          </div>}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
