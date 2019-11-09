import React, { Component } from "react";
import "./style.css";

class Navmessage extends Component {
    state = {
        message: "",
        animating: false
    };

    componentDidUpdate({score, topscore}, prevState) {
        const newState = {animating: true};
        if (score === 0 && topscore == 0) {
            newState.message="";
        } else if (score === 0 & topscore > 0) {
            newState.message = "incorrect";
        }
        else {
            newState.message = "correct";
        }
        if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);
        }
    }

    renderMessage= () => {
        switch(this.state.message){
            case "correct":
            return "you guessed correctly";
            case "incorrect":
            return "you guessed incorrectly";
            default:
            return "please click on an image"
        }
    };

    render() {
        return (
            <li
            className={this.state.animating ? this.state.message : ""}
            onAnimationEnd={()=> this.setState({animating: false})}
            >
                {this.renderMessage()}
            </li>
        );
    }
}

export default renderMessage;