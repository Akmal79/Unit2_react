import React from "react";

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cricketer: "sachin" };
    }

    render() {
        return (
            <div>
                <h1>Fav cricketer is {this.state.cricketer}</h1>
                <div id="d1"></div>
            </div>
        );
    }

    // Mounting first life cycle
    componentDidMount() {
        setTimeout(() => {
            this.setState({ cricketer: "Virat" });
        }, 2000);
    }

    // Updating life cycle
    componentDidUpdate() {
        document.getElementById("d1").innerHTML = "The updated cricketer is " + this.state.cricketer;
    }
}

export default Demo;
