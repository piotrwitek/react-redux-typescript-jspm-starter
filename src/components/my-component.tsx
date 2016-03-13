import * as React from "react";

enum Texts {
  Complete,
  Incomplete
}

function getTranslation(text: Texts) {
  switch (text) {
    case Texts.Complete:
      return "complete";
    case Texts.Incomplete:
      return "incomplete";
  }
}

interface IProps extends React.Props<MyComponent> {
  name: string;
  age: number;
}

interface IState {
  complete?: boolean;
}

export class MyComponent extends React.Component<IProps, IState> {
  state: IState = {
    complete: false
  };

  componentWillUpdate() {
  }

  getStatusText = () => {
    return (this.state.complete ? getTranslation(Texts.Complete) : getTranslation(Texts.Incomplete));
  };

  toggleCompletion = () => {
    // debugger;
    this.setState({ complete: !this.state.complete });
  };

  render(): JSX.Element {
    return (
      <div>
        <div>{this.props.name} is {this.props.age} years old.</div>
        <div>Profile status: {this.getStatusText() }</div>
        <button onClick={this.toggleCompletion}>Toggle completion</button>
      </div>
    );
  }
}
