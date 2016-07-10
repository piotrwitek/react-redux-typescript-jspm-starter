// style imports
import './main.css!';
// lib imports
import * as React from 'react';
// components imports
import {AppStore, UserData} from '../stores/app-store';
import {UserProfile} from './user-profile';

interface LocalProps extends React.Props<Main> {
  welcomeMessage: string;
}

// App pure component
export class Main extends React.Component<LocalProps, AppStore> {
  constructor() {
    super();
    this.state = new AppStore();
  }

  render() {
    const {userData} = this.state;
    return (<div className="main-component">
      <h2>{this.props.welcomeMessage}</h2>
      <UserProfile name={userData.name} age={userData.age} complete={userData.complete} />
    </div>
    );
  }
}
