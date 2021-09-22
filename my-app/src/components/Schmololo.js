import React from "react";

export default function FunctionalGreeting(props) {
    return (
        <div>
            <h1 className="Schmololo-container">Tis' I, {props.name}</h1>
            <h2>I'm a simple functional component!</h2>
            <h3 className="Schmololo-jiggle">With extremely annoying animations!!!</h3>
            <h4 className="Schmololo-bouncey">&#128520;</h4>
        </div>
    );
}