import React from "react";

export default class UserInfo extends React.Component {
    state = {
        name: "Jim",
        profession: "Instructor"
    };

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.profession}</p>
                <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
            </div>
        );
    }
}