import React, { Component } from "react";

class Buttons extends Component {

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