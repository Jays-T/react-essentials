import React from "react";

export default class Hatred extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    };

    setCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        });
    };

    lowerCount = () => {
        this.setState(prevState => {
            return { count: prevState.count - 1}
        });
    };


    render() {
        return (
            <div className="greeting">
            <span>Hatred: {this.state.count}</span>
            <button class="affect-count-btn" onClick={this.setCount}>&#128077;</button>
            <button class="affect-count-btn" onClick={this.lowerCount}>👎</button>
            </div>
        );
    };
}