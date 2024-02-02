import React from "react";
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cricketer: "sachin" };
    }
    render() {
        return (<h1>Fav cricketer is {this.state.cricketer}</h1>)
    }
    //mounting first life cycle
    componentDidMount() {
        setTimeout(() => {
            this.setState({ cricketer: "Virat" });
        }, 2000);
    }
}
export default Demo;