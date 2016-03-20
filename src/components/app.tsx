// style imports
import './app.css!';
// lib imports
import * as React from 'react';
// components imports
import {AppStore, UserData} from '../stores/app-store';
import {UserProfile} from './user-profile';

interface LocalProps extends React.Props<App> {
}

// App pure component
export class App extends React.Component<LocalProps, AppStore> {
  constructor() {
    super();
    this.state = new AppStore();
  }

  render() {
    const {userData} = this.state;
    return (<div>
      <UserProfile name={userData.name} age={userData.age} complete={userData.complete} />
    </div>
    );
  }
}
