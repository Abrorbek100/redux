import { useReducer } from "react";
import { createContext } from "react";

export const ProductContextApi = createContext();

export const ProductContextProvider = ({ children }) => {
  const initialState = {
    name: "",
    click: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_NAME":
        return { ...state, name: action.payload };
      case "CLICK":
        return { ...state, click: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContextApi.Provider value={{ dispatch, state }}>
      {children}
    </ProductContextApi.Provider>
  );
};
