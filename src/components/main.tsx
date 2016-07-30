// style imports
import './main.css!';
// lib imports
import * as React from 'react';
// components imports
import {AppStore } from '../stores/app-store';
import {UserProfile} from './user-profile';

interface LocalProps extends React.Props<Main> {
  welcomeMessage: string;
  appStore: AppStore;
}

// App pure component
export class Main extends React.Component<LocalProps, {}> {

  componentDidMount() {
    console.log('main mounted!');
  }

  render() {
    const {userData} = this.props.appStore;
    return (
      <div className="main-component">
        <h2>{this.props.welcomeMessage}</h2>
        <UserProfile userData={userData} />
        <UserProfile userData={null} />
      </div>
    );
  }
}
