// style imports
import './user-profile.css!';
// lib imports
import * as React from 'react';
import {UserData} from '../stores/app-store';

interface LocalProps extends React.Props<UserProfile> {
  userData: UserData;
}

interface LocalState {
  complete?: boolean;
}

export class UserProfile extends React.Component<LocalProps, LocalState> {
  constructor(props: LocalProps) {
    super();
    this.state = {
      complete: props.userData ? props.userData.complete : null
    };
  }

  componentDidMount() {
    console.log('user-profile mounted!');
  }

  componentDidUpdate() {
    console.log('user-profile updated!');
  }

  getStatusText = () => {
    return (this.state.complete ? 'complete' : 'incomplete');
  };

  handleToggleCompletion = () => {
    this.setState({ complete: !this.state.complete });
  };

  render(): JSX.Element {
    if (this.props.userData == null) {
      return <div className="user-profile-component">User profile data is empty.</div>;
    }

    const {name, age} = this.props.userData;

    return (
      <div className="user-profile-component">
        <div>{name} is {age} years old.</div>
        <div>Profile status: {this.getStatusText() }</div>
        <button onClick={this.handleToggleCompletion}>Toggle completion</button>
      </div>
    );
  }
}
