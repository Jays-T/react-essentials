import React from "react";

export default class RandomExtra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: `😀`,
            buttonText: `Don't click Me!`,
        }
    };

    setDisplay = () => {
        this.setState(prevState => {
            return { 
            display: prevState.display === `👎😠 ` ? `😀` : `👎😠 `,
            buttonText: prevState.buttonText === `Don't click Me!` ? `Leave AngryMcAngryFace Alone` : `Don't click Me!`}
        });
    };

    render() {
        return (
            <div className="set-right">
            <h2>{this.state.display}</h2>
            <button class="affect-count-btn" onClick={this.setDisplay}>{this.state.buttonText}</button>
            </div>
        )
    };
}