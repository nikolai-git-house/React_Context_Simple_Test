import { UseUsersState } from "../shared/users.context";

/** Renders a list of users */
function UsersList() {
  // Get users state
  const usersState = UseUsersState();

  // Render users list
  return (
    <div className="list-container">
      <ul>
        {/* Loop through each user */}
        {usersState.users.map(function(user, index) {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </div>
    
  );
}

export default UsersList;
