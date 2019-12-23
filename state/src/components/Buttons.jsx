import React, { Component } from "react";

class Buttons extends Component {

    state = {
        text1: "Button 1", 
        text2: "Button 2"
    };

    render() {
        return (
            <div>
                <button>{this.state.text1}</button>
                <br/>
                <button>{this.state.text2}</button>
            </div>
        )
    }
}

export default Buttons;