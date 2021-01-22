import { Component } from 'react'
import UsersContext from "../shared/users.context";

/** Renders a list of users */
class UsersList extends Component {
  render() {
    const { users } = this.context
    return (
      <div className="list-container">
        <ul>
          {/* Loop through each user */}
          {users.map(function(user, index) {
            return <li key={index}>{user}</li>;
          })}
        </ul>
      </div>
      
    );
  }
}

UsersList.contextType = UsersContext

export default UsersList;
