import React, { Component } from 'react';
export default class Judge extends React.Component {
    constructor() {
        super()

        this.state = { stars: 0, available: false }
        this.applaud = this.applaud.bind(this)
    }

    applaud() {
        //Send this applaud status to Kid.js
        // console.log('======>applaud calling')
        //   var  emo='happy'
        this.props.getApplaud()
    }

    provideStars() {
        const { stars } = this.state;

        this.setState({ stars: stars + 1 })
    }
    shouldComponentUpdate(props, nextState) {
        // console.log(nextState.stars)
        if(nextState.stars >5){
            return false
        }
        return true
    }

    render() {
        const { stars, available } = this.state;

        return (
            <div>
                <button type="button" onClick={this.applaud.bind(this)}>
                    Appreciate performance
            </button>
                <button type="button" onClick={this.provideStars.bind(this)}>
                    Provide stars
            </button>

                Kid is available: {available}

                Stars gained: {stars}
            </div>
        );
    }
}
