import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

function Nav(props){
    return(
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li>
                    <NavMessage score={props.score} topscore={props.topscore} />
                </li>
                <li>
                    Score: {props.score} || Topscore: {props.topscore}
                </li>
            </ul>
        </nav>
    );
}

export default Nav;