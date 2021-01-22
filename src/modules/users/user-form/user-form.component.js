import { Component } from "react";
import UsersContext from "../shared/users.context";

/** Renders a form to add a user with event handler */
class UserForm extends Component {

  handleSubmit = event => {
    event.preventDefault();
    // Dispatch new add user
    this.context.addUser(this.context.username)
  }

  render() {
    const { username, onChangeUsername } = this.context

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="userName"
          value={username}
          onChange={onChangeUsername}
        />
        <button>Add {username || "user"}</button>
      </form>
    )
  }
}

UserForm.contextType = UsersContext;

export default UserForm;
