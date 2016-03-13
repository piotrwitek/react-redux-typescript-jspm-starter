import * as React from "react";

interface IProps extends React.Props<MyComponent> {
  name: string;
  age: number;
  some?: string;
}

interface IState {
  complete?: boolean;
  status?: string;
}

export class MyComponent extends React.Component<IProps, IState> {
  state: IState = {
    complete: false
  };

  getStatus = () => {
    return (this.state.complete ? "complete" : "incomplete");
  };

  toggleCompletion = () => {
    // debugger;
    this.setState({ complete: !this.state.complete });
  };

  render(): JSX.Element {
    return (
      <div>
      <div>{this.props.name} is {this.props.age} years old.</div>
      <div>Profile status: {this.getStatus()}</div>
      <button onClick={this.toggleCompletion}>Toggle completion</button>
      </div>
    );
  }
}
