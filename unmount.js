import React from "react";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delhead() {
    this.setState({ show: false });
  }

  render() {
    let head;
    if (this.state.show) {
      head = <Child />;
    }
    return (
      <div>
        {head}
        <button type="button" onClick={() => this.delhead()}>
          Delete
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component is about to unmount!");
  }

  render() {
    return <h1>This is the child component</h1>;
  }
}

export default Demo;
