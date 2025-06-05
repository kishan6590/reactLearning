import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [count, setCount] = useState('Hii');

  const addNotification = () => {
    setCount((prev) => prev + 1);
  };
  
  const resetNotification = () => {
    setCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{ count, addNotification, resetNotification }}
    >
      {/* yeha pe wo likho jis jis me above data available krna chate ho */}
      {children}
    </NotificationContext.Provider>
  );
}
// custom Hook
export function useNotification() {
  return useContext(NotificationContext);
}
