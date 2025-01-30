import React, { createContext, useReducer } from "react";

export const InventoryContext = createContext({
  loginState: false,
  token: "",
  adminLogin: () => {},
  adminLogout: () => {},
  updateToken: () => {},
});

function InventoryReducer(state, action) {
  console.log("action : " + action.accessToken);
  switch (action.type) {
    case "login":
      return {
        ...state,
        loginState: true,
        token: action.accessToken
      };
    case "logout":
      return {
        ...state,
        loginState: false,
      };
    case "update":
      return {
        ...state,
        token: action.accessToken,
      };
    default:
      return state;
  }
}

export default function AuthContext({ children }) {
  const [InventoryState, InventoryDispatch] = useReducer(InventoryReducer, {
    loginState: false,
    token: null,
  });

  function adminLogin(token) {
    console.log("adminLogin :" + token)
    InventoryDispatch({ type: "login", accessToken: token });
  }

  function adminLogout() {
    InventoryDispatch({ type: "logout" });
  }

  function updateToken(token) {
    InventoryDispatch({ type: "update", accessToken: token });
  }

  const ctxValue = {
    loginState: InventoryState.loginState,
    token: InventoryState.token,
    adminLogin,
    adminLogout,
    updateToken,
  };

  return (
    <InventoryContext.Provider value={ctxValue}>
      {children}
    </InventoryContext.Provider>
  );
}


