import { Component } from 'react';

import UsersContext from "./shared/users.context";
import UserForm from "./user-form/user-form.component";
import UsersList from "./users-list/users-list.component";

/** Renders users page */
class UsersPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      users: []
    }
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  addUser = (username) => {
    this.setState({
      users: [...this.state.users, username]
    }, () => {
      // Clear out username state
      this.setState({ username: "" })
    })
  }
  
  render() {
    const { users, username } = this.state
    return (
      // Wrap form + list components in context provider
      <UsersContext.Provider value={{
        users, 
        username, 
        addUser: this.addUser, 
        onChangeUsername: this.onChangeUsername}}
      >
        <UserForm />
        <UsersList />
      </UsersContext.Provider>
    );
  }
}

export default UsersPage;
