// app data models
export class UserData {
  name: string;
  age: number;
  complete: boolean;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.complete = true;
  }
}

export class AppStore {
  userData: UserData;

  constructor(initialState?: UserData) {
    this.userData = initialState || null;
  }

}
