import React,{Component} from 'react';

export default class Teacher extends React.Component {
 sendDataToKid() {
	const furtherSteps = ["step3", "step4", "step5"]
    //Send this data to Kid.js
    // console.log('sendDataToKid')
    this.props.updateSteps(furtherSteps)
 }

 render() {
   
   return (
     <button onClick={this.sendDataToKid.bind(this)}>Get Help From Teacher</button>
   );
 }
}
//my name is hakeemullah, I am just checking my git repo updation.