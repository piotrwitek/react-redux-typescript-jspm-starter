// style imports
import './user-profile.css!';
// lib imports
import * as React from 'react';

enum Texts {
  Complete,
  Incomplete
}

function getTranslation(text: Texts) {
  switch (text) {
    case Texts.Complete:
      return 'complete';
    case Texts.Incomplete:
      return 'incomplete';
  }
}

interface LocalProps extends React.Props<UserProfile> {
  name: string;
  age: number;
  complete: boolean;
}

interface LocalState {
  complete?: boolean;
}

export class UserProfile extends React.Component<LocalProps, LocalState> {
  constructor(props) {
    super();
    this.state = {
      complete: props.complete
    };
  }

  getStatusText = () => {
    return (this.state.complete ? getTranslation(Texts.Complete) : getTranslation(Texts.Incomplete));
  };

  handleToggleCompletion = () => {
    this.setState({ complete: !this.state.complete });
  };

  render(): JSX.Element {
    const {name, age} = this.props;
    return (
      <div className="user-profile-component">
        <div>{name} is {age} years old.</div>
        <div>Profile status: {this.getStatusText() }</div>
        <button onClick={this.handleToggleCompletion}>Toggle completion</button>
      </div>
    );
  }
}
