import { createContext, useContext, useState } from "react";

// Create the context
export const CountContext = createContext({
  count: 0,
  setCount: () => {},
});

// Custom hook to use the CountContext
export const useCount = () => {
  return useContext(CountContext);
};

// Provider component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  // Function to update the count
  //   const updateCount = () => {
  //     setCount((count) => count + 1);
  //   };

  // Log the count whenever it changes
  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
