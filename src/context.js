import React, {  useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./data";

const Context = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [phones, setPhones] = useState(data);
  const [count, setCount] = useState('0');
  const [addedCart, setAddedCart] = useState({});

  // store 
//   const dispatch = useDispatch();
//   const product = useSelector((state) => state.product);
// console.log(product);
  
  // useEffect(() => {
  // }, [search]);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        search,
        setSearch,
        phones,
        count,
        setCount,
        data,
        addedCart,
        setAddedCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(Context);
};

export { Context, AppProvider };
