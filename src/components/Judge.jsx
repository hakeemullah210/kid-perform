import React, { Component } from 'react';
export default class Judge extends React.Component {
    constructor() {
        super()

        this.state = { stars: '', available: false }
        this.applaud = this.applaud.bind(this)
    }

    applaud() {

        // console.log('appluad calling');
        this.props.getApplaud()
    }

    provideStars() {
        const { stars } = this.state;

        this.setState({ stars: stars + 1 })
        this.setState({
            stars: stars + '*'
        })
    }

    shouldComponentUpdate(props, nextState) {
        // console.log(nextState.stars)
        if (nextState.stars.length > 5) {
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
                <br />
                <button type="button" onClick={this.provideStars.bind(this)}>
                    Provide stars
            </button>
                <br />
                Kid is available: {available}

                Stars gained:  {stars}
             
            </div>
        );
    }
}
