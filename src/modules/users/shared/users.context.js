// Import react dependencies
import {createContext, useReducer, useContext} from "react";


const UsersStateContext = createContext(undefined);
const UsersDispatchContext = createContext(undefined);

function UsersReducer(state, action) {
  switch (action.type) {
    // Add user action
    case "add": {
      // Push to copy of state.users
      state.users.push(action.user);
      // Update state
      return { users: state.users };
    }
    // Default action
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UsersProvider({ children }) {
  // Create users state reducer hook
  const [state, dispatch] = useReducer(UsersReducer, {
    users: [{ name: "Eugene Chen" }]
  });

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

/** Utility function to allow other components to access users state from context api */
function UseUsersState() {
  // Get users state context
  const context = useContext(UsersStateContext);
  if (context !== undefined) {
    return context;
  }
  throw new Error("UseUsersState must be used within a UsersProvider");
}

/** Utility function to allow other components to access users dispatch from context api */
function UseUsersDispatch() {
  // Get users dispatch context
  const context = useContext(UsersDispatchContext);
  if (context !== undefined) {
    return context;
  }
  throw new Error("UseUsersDispatch must be used within a UsersProvider");
}

export { UsersProvider, UseUsersState, UseUsersDispatch };
