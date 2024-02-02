import React from "react";
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cricketer: "sachin" };
    }
    shouldComponentUpdate(){
        return true;
    }
    Change=()=>{
        this.setState({cricketer:"Virat"})
    }
    render(){
        return(

            <div>
            <h1>Fav cricketer is: {this.state.cricketer}</h1>
            <button type="button" onClick={this.Change}>Update </button>
        </div>
            )
    }
}
export default Demo;